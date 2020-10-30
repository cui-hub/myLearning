const compileUtil = {
    getVal(expr, vm) {
        //针对不同指令内容从data中获取数据，例如v-text="msg";v-text="person.fav",用一个数组的reduce函数完美解决
        return expr.split('.').reduce((data, currentVal) => {
            return data[currentVal];
        }, vm.$data)
    },
    getContentVal(expr, vm) {
        return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getVal(args[1], vm);
        })
    },
    text(node, expr, vm) { //expr:msg
        let value;
        if (expr.indexOf('{{') !== -1) {
            value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
                new watcher(vm, args[1], (newVal) => {
                    this.updater.textUpdater(node, this.getContentVal(expr, vm));
                })
                return this.getVal(args[1], vm)
            })
        } else {
            value = this.getVal(expr, vm); //value:'学习MVVM实现原理'
            new watcher(vm, expr, (newVal) => {
                this.updater.textUpdater(node, newVal);
            })
        }
        this.updater.textUpdater(node, value);
    },
    html(node, expr, vm) {
        const value = this.getVal(expr, vm);
        //初始化数据的时候就绑定watcher
        new watcher(vm, expr, (newVal) => {
            this.updater.htmlUpdater(node, newVal);
        })
        this.updater.htmlUpdater(node, value);
    },
    model(node, expr, vm) {
        const value = this.getVal(expr, vm);
        new watcher(vm, expr, (newVal) => {
            this.updater.modelUpdater(node, newVal);
        })
        this.updater.modelUpdater(node, value);
    },
    on(node, expr, vm, eventName) {
        let fn = vm.$options.methods[expr];
        //fn.bind(vm)保证了fn函数this指针指向vm实例
        node.addEventListener(eventName, fn.bind(vm), false)
    },
    bind(node, expr, vm, attrName) {
        const value = this.getVal(expr, vm);
        this.updater.bindUpdater(node, attrName, value);
    },
    //更新函数：
    updater: {
        textUpdater(node, value) {
            node.textContent = value;
        },
        htmlUpdater(node, value) {
            node.innerHTML = value;
        },
        modelUpdater(node, value) {
            node.value = value;
        },
        bindUpdater(node, attrName, value) {
            node[attrName] = value;
        }
    }
}

//2、实现一个指令解析器compile
class Compile {
    constructor(el, vm) {
        //先判断el是否是元素节点，不是再通过document.querySelector()选择,并赋给compile的了属性
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        // console.log(this.el); //<div id='app'>...</div>
        this.vm = vm;
        //1、获取文档碎片，放入内存中，会减少页面的回流和重绘
        const fragment = this.node2Fragment(this.el);
        //2、编译模板
        this.compile(fragment);
        // 3、追加子元素到根元素
        this.el.appendChild(fragment);
    }

    isElementNode(node) {
        return node.nodeType === 1;
    }
    node2Fragment(el) {
        //创建文档碎片对象  
        const f = document.createDocumentFragment();
        let first;
        while (first = el.firstChild) { //注意el.firstChild取值的移动性
            f.appendChild(first);
        }
        return f;
    }
    compile(fragment) {
        //1、获取到碎片对象中每个子节点
        const childNodes = fragment.childNodes;
        //2、强制转化为数组，并遍历
        [...childNodes].forEach(child => {
            // console.log(child)//其中包含文本节点，也就是标签内部的东西，不需要操作
            if (this.isElementNode(child)) {
                //是元素节点---->编译元素节点
                this.compileElement(child);
            } else {
                //是文本节点---->编译文本节点
                this.compileText(child);
            }
            //如果子节点还有子节点：递归
            if (child.childNodes && child.childNodes.length) {
                this.compile(child);
            }

        })
    }
    compileElement(node) {
        //1、针对指令的编译,以<div v-text='msg'></div>为例
        const attributes = node.attributes;
        [...attributes].forEach(attr => {
            //区分原生属性和vue指令
            //console.log(attr)//v-text='msg'
            const { name, value } = attr;
            // console.log(attr);//v-text='msg'
            //console.log(name, value)//v-text msg
            if (this.isDirective(name)) {
                const [, directive] = name.split('-');
                const [dirname, eventName] = directive.split(':'); //针对v-on:click="click" v-bind:href="url"绑定事件方式
                //更新数据，数据驱动视图
                compileUtil[dirname](node, value, this.vm, eventName);

                //删除所有指令标签上的指令属性
                node.removeAttribute('v-' + directive);
            } else if (this.isSimpleEventName(name)) { //针对@click="click"绑定事件方式
                let eventName = name.split('@')[1];
                compileUtil['on'](node, value, this.vm, eventName);
            } else if (this.isSimpleAttrName(name)) { //针对:href="url"绑定事件方式
                let attrName = name.split(':')[1];
                compileUtil['bind'](node, value, this.vm, attrName);
            }
        })

    }
    compileText(node) {
        //主要针对{{}}
        const content = node.textContent;
        if (/\{\{(.+?)\}\}/.test(content)) {
            compileUtil['text'](node, content, this.vm)
        }
    }
    isDirective(attrName) { //判断是vue指令还是原生属性
        return attrName.startsWith('v-');
    }
    isSimpleEventName(attrName) {
        return attrName.startsWith('@');
    }
    isSimpleAttrName(attrName) {
        return attrName.startsWith(':')
    }
}
class watcher {
    constructor(vm, expr, cb) {
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        //先把旧址保存起来
        this.oldVal = this.getOldVal();
    }
    getOldVal() { //取旧值
        Dep.target = this; //将watcher挂载到D
        const oldVal = compileUtil.getVal(this.expr, this.vm);
        Dep.target = null;
        return oldVal;
    }
    update() {
        // console.log('updated')
        const newVal = compileUtil.getVal(this.expr, this.vm);
        if (newVal !== this.oldVal) {
            this.cb(newVal);
            // console.log('cb')
        }
    }
}
class Dep { //依赖收集器
    constructor() {
            this.subs = []; //用来收集watcher
        }
        //收集watcher函数
    addSub(watcher) {
            this.subs.push(watcher);
        }
        //通知watcher更新视图
    notify() {
        // console.log('更改了数据');
        this.subs.forEach(watcher => {
            watcher.update();
        })
    }
}
class Observer {
    constructor(data) {
        this.observe(data);
    }
    observe(data) {

        if (data && typeof data === 'object') {
            Object.keys(data).forEach(key => {
                this.defineRactive(data, key, data[key]);
            })
        }
    }
    defineRactive(obj, key, value) {
        //递归遍历
        this.observe(value);
        let dep = new Dep();
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: false,
            get() {
                //订阅数据初始化或者改变后 获取时，往dep中添加watcher订阅者
                // 因为调用getVal的时候回触发getter，从而Dep.target 此时是该prop的watcher实例
                Dep.target && dep.addSub(Dep.target);
                // console.log(dep.target);
                return value;
            },
            set: (newVal) => {
                this.observe(newVal); //给更改的值也添加数据劫持监听
                if (newVal !== value) {
                    value = newVal;
                }
                // console.log('启动了set')
                //告诉dep数据变化
                dep.notify();
            }
        })
    }
}
class MVue {
    constructor(options) {
        //通过原生js的options全局属性，绑定属性
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
        if (this.$el) {
            //1、实现一个数据观察者Watcher
            new Observer(this.$data);
            //2、实现一个指令解析器compile
            new Compile(this.$el, this);
        }
    }
}