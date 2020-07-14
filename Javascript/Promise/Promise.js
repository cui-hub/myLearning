/*
自定义promise模块：IFFE
*/
(function(window) {
    function Promise(executor) {
        //self保存promise对象，否则function resolve(value){}内的self指向window
        const self = this;
        self.status = 'pending'; //给promise对象指定status属性，初始值为pending
        self.data = undefined; //给promise对象指定一个用于存储结果数据的属性
        self.callbacks = []; //每个元素结构{ onResolved(){}, onRejected(){} }

        function resolve(value) {
            //如果状态不是pending，结束
            if (self.status !== 'pending') {
                return;
            }
            //改变status改为resolved
            self.status = 'resolved';
            //保存value数据
            self.data = value;
            //如果有待执行的callback函数，异步执行该回调函数
            if (self.callbacks.length > 0) {
                //利用setTimeout实现函数的异步回调是把异步回调函数放入宏队列
                setTimeout(() => { //执行所有的成功的回调
                    self.callbacks.forEach(callbacksObj => {
                        callbacksObj.onResolved(value);
                    });
                })
            }
        };

        function reject(reason) {
            //如果状态不是pending，结束
            if (self.status !== 'pending') {
                return;
            }
            //改变status改为rejected
            self.status = 'rejected';
            //保存value数据
            self.data = reason;
            //如果有待执行的callback函数，异步执行该回调函数
            if (self.callbacks.length > 0) {
                //利用setTimeout实现函数的异步回调是把异步回调函数放入宏队列
                setTimeout(() => { //执行所有的成功的回调
                    self.callbacks.forEach(callbacksObj => {
                        callbacksObj.onRejected(reason);
                    }, 0);
                })
            }

        };
        //立即同步执行执行器函数--->如果出现异常，调用失败函数rejected，并错误当做函数传入
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error);
        }

    }


    //promise的原型then方法:-->指定成功和失败的回调函数；返回一个promise对象
    Promise.prototype.then = function(onResolved, onRejected) {
        //如果第一个不是一个回调函数，就将传进来的成功的value向后传递value
        onResolved = typeof onResolved === 'function' ? onResolved : value => value;
        //实现异常穿透的关键一步：
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        const self = this;

        //promise.then返回一个新的promise对象
        return new Promise((resolve, reject) => {
            function handler(callback) { //****handler函数作用是处理promise.then()内回调函数返回promise成功失败的情况
                //如果抛出异常：return的promise就会失败，return error
                //如果不抛出异常：返回非promise，return的promise就会成功，return 非promise值； 
                //返回promise，return的promise结果就是这个promise结果。
                try {
                    const result = callback(self.data);
                    if (result instanceof Promise) {
                        // result.then(
                        //     value => {
                        //         resolve(value);
                        //     },
                        //     reason => {
                        //         reject(reason);
                        //     })//-------------->>简洁版：value=>{resolve(value)} === resolve(value),既简洁又少用一层函数，性能高
                        result.then(resolve, reject);
                    } else {
                        resolve(result);
                    }
                } catch (error) {
                    reject(error);
                }
            }

            if (self.status === 'pending') {
                //如果当前状态还是pending状态，保存回调函数
                self.callbacks.push({
                    onResolved() {
                        handler(onResolved);
                    },
                    onRejected() {
                        handler(onRejected);
                    }
                })
            } else if (self.status === 'resolved') { //先改变状态，再指定回调,就立即运行回调函数
                setTimeout(() => {
                    handler(onResolved);
                }, 0)
            } else {
                setTimeout(() => {
                    handler(onRejected);
                }, 0)
            }
        });
    }

    //promise的原型catch方法：-->指定失败的回调函数；返回一个promise对象
    Promise.prototype.catch = function(onRejected) {
        return this.then(undefined, onRejected)
    }

    //promise的函数对象resolve方法-->返回一个指定结果的成功的promise
    Promise.resolve = function(value) {
        return new Promise((resolve, reject) => {

            if (value instanceof Promise) { //value是promise
                value.then(resolve, reject);
            } else { //value不是promise
                resolve(value);
            }
        })
    }

    //promise的函数对象reject方法-->返回一个指定结果的失败的promise
    Promise.reject = function(reason) {
        //返回一个失败的promise
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }


    //promise的函数对象all方法-->只有当所有promise都成功，返回一个promise；否则就失败
    Promise.all = function(promises) {
        return new Promise((resolve, reject) => {
            let values = new Array(promises.length); //用来保存所有成功value
            let count = 0; //用来保存成功promise的数量
            //遍历获取每个promise的结果
            promises.forEach((item, index) => {
                Promise.resolve(item).then( //给item包上一层promise使得接收的数组不一定非得是promise对象
                    value => {
                        values[index] = value; //不能用push，否则就先成功的先放了
                        count++;
                        //如果全部成功，return的promise改为成功
                        if (count === promises.length) {
                            resolve(values)
                        }
                    },
                    reason => { //只要出现第一个失败（最快的失败），整个失败
                        reject(reason);
                    }
                )
            })
        })
    }

    //promise的函数对象race方法-->返回一个promise，其结果由第一个成功的promise决定
    Promise.race = function(promises) {
        return new Promise((resolve, reject) => {
            promises.forEach((item, index) => {
                Promise.resolve(item).then(
                    value => { //一旦有成功的改变return的promise的状态为resolved
                        resolve(value);
                    },
                    reason => { //只要出现第一个失败（最快的失败），整个失败
                        reject(reason);
                    }
                )
            })
        })
    }

    //向外暴露promise
    window.Promise = Promise
})(window);