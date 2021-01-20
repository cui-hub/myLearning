#### 重点：路由组件与一般组件区别
    1. 写法不同
        一般组件：<Home/>
        路由组件：<Route path:"/home" component={Home}/>
    2. 存放位置不同
        一般组件：components
        路由组件：pages
    3. 接收到的props不同
        一般组件：写标签时，传递什么收到什么
        路由组件：路由器负责传递三个prop，包含几个关键参数：
        history:
            go: ƒ go(n)
            goBack: ƒ goBack()
            goForward: ƒ goForward()
            push: ƒ push(path, state)
            replace: ƒ replace(path, state)
        location:
            pathname: "/about"
            search: ""
            state: undefined
        match:
            params: {}
            path: "/about"
            url: "/about"

#### 重点：页面丢失样式的问题和解决办法

    ## 问题：当路由路径设置为多级路径如"/a/home"时，第一次加载没问题，但是点击一条link后再次刷新页面就会出现样式丢失的问题

    ## 原因：本地项目编译后全部集中在public/index.html中，并放在本地服务器http://localhost:3000中，index.html中引用的资源也是从public中找；当点击Home后，地址栏变为http://localhost:3000/a/home，刷新后浏览器根据地址栏url重新加载页面，会将/a当成是文件路径，从而在public/a中寻找index.html引用的资源，假如采用相对路径的方式引用资源，那么public/a并没有引用的css样式，找不到就会返回index.html（webpack-server是这样设置的），从而造成样式丢失

    ## 解决办法：
        1. 将index.html中引用资源的路径中的"."去掉；"./bootstrap.css"------->"/bootstrap.css",这样寻找资源就会从public找起，不会出错。
        2.  将index.html中引用资源的路径中的"."改为"%PUBLIC_URL%"，原理同上。
        3. 将BrowserRouter改为HashRouter，此时URL添加哈希符http://localhost:3000/#/a/home，哈希符号后面的地址会被服务器认定为前端资源，请求时忽略后面的多级路径，从而避免寻找资源路径和路由路径混淆。-----此方法不太常用。


