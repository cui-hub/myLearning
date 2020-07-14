const compileUtil = {
    getVal(expr, vm) {
        //针对不同指令内容从data中获取数据，例如v-text="msg";v-text="person.fav",用一个数组的reduce函数完美解决
        return expr.split('.').reduce((data, currentVal) => {
            return data[currentVal];
        }, vm.$data)
    },
    text(node, expr, vm) { //expr:msg
        let value;
        if (expr.indexOf('{{') !== -1) {
            value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
                return this.getVal(args[1], vm)
            })
        } else {
            value = this.getVal(expr, vm); //value:'学习MVVM实现原理'
        }
        this.updater.textUpdater(node, value);
    },
    html(node, expr, vm) {
        const value = this.getVal(expr, vm);
        this.updater.htmlUpdater(node, value);
    },
    model(node, expr, vm) {
        const value = this.getVal(expr, vm);
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

class MVue {
    constructor(options) {
        //通过原生js的options全局属性，绑定属性
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
        if (this.$el) {
            //1、实现一个数据观察者Watcher
            //2、实现一个指令解析器compile
            new Compile(this.$el, this);
        }
    }
}