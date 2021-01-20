#### Redux学习重点-文件作用

  1. store.js
    (1). 引入redux中的createStore()函数，传建一个store对象
    (2). createStore()要传入一个为其服务的reducer
    (3). 记得暴露store

  2. reducer.js
    (1). reducer本质是一个函数，接受：preState, action，返回加工后的状态
    (2). reducer有两个作用：初始化状态、加工状态
    (3). reducer第一次调用时store.js加载时自动触发的，传入的参数：preState:undefined, action:{type:'@@REDUX/INIT_a.c.v.d'}。写reducer时也要考虑初始化的代码，给状态一个初始化值
    (4). reducer必须是纯函数，否则state无法检测到更新
    ## 纯函数
    1. 不得改写参数
    2. 不会产生任何副作用，例如网络请求，IO设备等
    3. 不能调用Date.now(),Math.random()等

  3. action.js
    创建action对象，同步action返回一个一般对象，异步action得返回一个函数，但是需要安装中间件。

  4. constant.js
    常量库，保存type类型，方便修改和减少出错

  5. redux只负责管理状态，状态改变驱动页面的逻辑要自己写。redux中store对象利用发布订阅模式实现状态变更通知，一劳永逸的方法是在index.js入口文件处订阅状态变更，调用ReactDOM.render()，重新渲染整个<App/>组件，有diffing算法在，不用太担心渲染效率问题。
  

#### redux异步action
  1. 明确：将延迟的动作交给action，而不是组件本身
  2. 具体：
      cnpm i redux-thunk，并配置在store中
      创建的action函数不再返回一般对象，而是一个函数，该函数中写异步任务
      异步任务结束后，分发一个同步action区真正的操作数据
  3. 注意：异步action非必须，完全可以在组件中等待异步任务的结果在分发action 


#### react-redux基本使用

  1. 所有UI组件都应该包裹在一个容器组件内，他们是父子关系。
  2. 容器组件是真正和redux打交道的，可随意使用redux的api。
  3. UI组件不能使用任何redux的api。
  4. 容器组件通过props传给UI组件：(1). redux所保存的状态；(2). 由于操作状态的方法。
  5. 如何创建一个容器组件：connect(mapStateToProps, mapDispatchToProps)(UI)
  6. 容器组件如何获取store：通过在容器组件的父组件引入store，并通过传props
  的方式传给容器组件


#### react-redux自身API中的优化点
  1. mapDispatchToProps也可以是一个对象{key:actionCreator}，react-redux会自动帮你调用dispatch函数
  2. 所有的容器组件获取store可以通过react-redux的<Provider/>组件实现，在<App/>外层包裹<Provider store={store}/>组件,可以给应用中所有容器组件提供store，无需分别都写
  3. react-redux里的connect()函数会自动将容器组件变为能够响应store中state状态的变化
  4. UI组件和Container组件可以整合成一个组件，只暴露container组件
  5. 如果想要store是一个可存储多种状态的对象，必须在创建store时利用combineReducers方法合并不同组件的reducer


#### react-redux开发者工具使用
  1. cnpm i redux-devtools-extension
  2. store.js中配置
    import {composeWithDevTools} from 'redux-devtools-extension'
    const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));




