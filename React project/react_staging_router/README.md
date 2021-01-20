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
            go: ƒ go(n)    /* 前进/后退n页，+值为前进，-值为后退 */
            goBack: ƒ goBack()    /* 后退一页 */
            goForward: ƒ goForward()    /* 前进一页 */
            push: ƒ push(path, state)    /* 调用可控制路由地址push形式跳转 */
            replace: ƒ replace(path, state)    /* 调用可控制路由地址replace形式跳转 */
        location:
            pathname: "/about"
            search: ""    /* 存储通过search (query)参数*/
            state: undefined  /* 存储通过state形式传来路由组件的数据*/
        match:
            params: {}      /* 存储通过params形式传来路由组件的数据*/
            path: "/about"
            url: "/about"

#### 重点：页面丢失样式的问题和解决办法

    ## 问题：当路由路径设置为多级路径如"/a/home"时，第一次加载没问题，但是点击一条link后再次刷新页面就会出现样式丢失的问题

    ## 原因：本地项目编译后全部集中在public/index.html中，并放在本地服务器http://localhost:3000中，index.html中引用的资源也是从public中找；当点击Home后，地址栏变为http://localhost:3000/a/home，刷新后浏览器根据地址栏url重新加载页面，会将/a当成是文件路径，从而在public/a中寻找index.html引用的资源，假如采用相对路径的方式引用资源，那么public/a并没有引用的css样式，找不到就会返回index.html（webpack-server是这样设置的），从而造成样式丢失

    ## 解决办法：
        1. 将index.html中引用资源的路径中的"."去掉；"./bootstrap.css"------->"/bootstrap.css",这样寻找资源就会从public找起，不会出错。
        2.  将index.html中引用资源的路径中的"."改为"%PUBLIC_URL%"，原理同上。
        3. 将BrowserRouter改为HashRouter，此时URL添加哈希符http://localhost:3000/#/a/home，哈希符号后面的地址会被服务器认定为前端资源，请求时忽略后面的多级路径，从而避免寻找资源路径和路由路径混淆。-----此方法不太常用。

#### 重点：模糊匹配与严格匹配
    1. 默认为模糊匹配，也就是<Route>要求的path必须有，而且以该path开头
    2. 开启严格模式： <Route exact={true} path="/home" component={Home}/>
    3. 不建议随便开启严格匹配，容易引发一些问题，会导致无法匹配二级路由
    多级嵌套路由必须得满足模糊匹配，否则会出问题，因为对于路由器来说，所有路由地址和路由组件都是同一级的对象，并没有嵌套结构，所以得靠to的地址来表明嵌套结构，模糊匹配才能保证匹配到的组件为嵌套结构，例如一个二级路由地址为"/home/news"，路由器模糊匹配时既会匹配Home组件也会匹配Home下的News组件，才能正常显示；如果是严格匹配，Home父组件就不会被匹配到而不能展示，自然地子组件News也不能展示，虽然匹配到了。


#### 重点：路由组件传递参数的几种方式

    1. params参数形式：
        路由连接（携带参数）：<Link to={`/home/messages/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> 
        注册路由（接收参数）：<Route path="/home/messages/detail/:id/:title" component={MessageDetail}/>
        参数位置：this.props.match.params （自动处理成对象）

    2. search (query)参数形式：
        路由连接（携带参数）：<Link to={`/home/messages/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>
        注册路由（接收参数）：无需接受参数
        参数位置：this.props.location.search  （字符串形式，需要将"?"去掉，并通过querystring库将其传换成对象）

    3. state参数形式：
        路由连接（携带参数）：<Link to={{pathname:'/home/messages/detail', state:{id:msg.id, title:msg.title}}}>{msg.title}</Link>
        注册路由（接收参数）：无需接受参数
        参数位置：this.props.location.state  （对象形式）
        优势：隐藏参数
        不足：虽然刷新也可以保留住参数，但是清除缓存后，会丢失参数

#### 重点：push与replace
    react中，<Link/>等路由地址组件可设置replace属性，默认为false，也就是以push的方式将跳转前的地址压入history栈顶，可通过浏览器后退按钮回退，如果为true则取代栈顶地址，从而实现无痕效果。

#### 重点：withRouter的作用
    加工一个一般组件2，使其具有路由组件的三个属性history、loaction、match，返回一个新组件

#### 重点：BrowserRouter与HashRouter的区别
    1. 底层原理不一样：
        BrowserRouter使用的是H5的history API，不兼容IE9及以下的版本
        HashRouter使用的是URL的哈希值
    2. url表现形式不一样
        BrowserRouter路径中无#
        HasRouter路径包含#，如http://localhost:3000/#/home/news
    3. 刷新后对路由state参数的影响
        (1). BrowserRouter没有任何影响，因为state保存在history对象里
        (2). HashRouter刷新后会导致路由state参数的丢失
    4. 备注：HashRouter可以用来解决一些路径错误的问题


#### Redux:多组件共享状态的管理库
    



