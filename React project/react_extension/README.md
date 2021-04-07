# 1. setState()两种参数

  (1). setState(stateChange, [callback]) ------对象式的setState
      stateChange为状态的更改对象
      callback为可选回调函数，他在状态更新、页面也更新（render）后才被调用。setState是异步更新组件的。

  (2). setState(updater, [callback]) ------函数式的setState
      updater为返回stateChange对象的函数，接受两个参数：state, props
      callback为可选回调函数，他在状态更新、页面也更新（render）后才被调用

  [总结]：对象式setState是函数式setState的简写方式，是语法糖

  [使用原则]：1. 当不依赖于原状态时，建议使用对象式，否则建议函数式
           2. 如果需要在setState执行后获取最新的state，要传入callback


# 2. lazyLoad的使用
  路由组件的懒加载：组件展示是才会发送网络请求
  1. 引入路由组件的方式变为通过lzay()方式：const Home = lazy( ()=> import('./Home') )
  2. 通过<Suspense/>组件包裹所有注册路由组件，其属性fallback可以设置为一个loading时展示的组件（不能为lazyLoad组件）：
    <Suspense fallback={<h1>Loading...</h1>}>
      <Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>
    </Suspense>


# 3. Hooks
  ## 1. React Hook/Hooks是什么？
    (1) Hook是16.8.0版本新增的特性和语法
    (2) 可以让你在[函数式组件]中使用state等其他react特性

  ## 2. 三个常用的Hook
    [1]. State Hook: [React.useState()]
    [2]. Effect Hook: [React.useEffect()]
    [3]. Ref Hook: [React.useRef()]

  ## 3. State Hook
    (1) State Hook让函数式组件也可以拥有state状态，并进行状态数据的改写
    (2) 语法：>const [xxx, setxxx] = React.useState(initValue)
    (3) useState()说明：
        [参数]：第一次初始化指定的值在内部缓存
        [返回值]：包含两个元素的数组，第一个为当前内部状态值，第二个为更新状态的操作函数
    (4) setxxx()的两种写法：
        setxxx(newValue): 参数为非函数值，直接指定状态值，内部用其覆盖原来的状态
        setxxx(value => newValue): 参数为函数，接受原来状态，返回新状态，内部用其覆盖原来的状态

  ## 4. Effect Hook
  (1) Effect Hook让函数式组件也可以拥有类似于类式组件的生命周期函数

  (2) 语法：
      React.useEffect(
        ()=>{        
          <!-- 可执行附带操作 -->
          return ()=>{
            <!-- 可执行收尾工作 -->
          }
        },
        [state1,state2...]
      )

  (3) useEffect(fn, [arry])说明：
      [参数]：fn:回调函数，初次渲染必执行；arry：可选参数，没有则检测所有状态，[]则不监听状态

  (4) 根据第二个参数[arry]的不同可以看做不同的钩子函数：
      无第二个参数：[componentDidMount] + [componentDidUpdate]
      []: [componentDidMount]
      [state1,state2...]：[componentDidUpdate]（仅仅针对state1, state2....）
      第一个参数fn如果返回一个函数：[componnetWillUnmount]
  ## 3. Ref Hook
  (1) State Hook可以在函数式组件中存储/查找组件内标签或任意其他数据
  (2) 语法：const myRef = React.useRef()
  (3) 作用：保存标签对象，和React.createRef()作用一样

# 4. <Fragment>与</>
  [共同点] 都可以作为组件最外层标签，编译时会忽略改标签
  [区别] <Fragment/>可以设置唯一属性key，<>不可以设置属性

# 5. Context
  ## 1. 理解
  一种通讯方式，适用于[祖组件]与[后代组件]间通讯
  
  ## 2. 使用
  在所有组件都能访问到的地方（外部）：
    1. 创建context容器对象：
        const XxxContext = React.createContext()

    2. 渲染子组件时，外层包裹<XxxContext.Provider value={数据}>,通过value属性给后代组件传参数
        <XxxContext.Provider value={数据}>
          子组件
        </XxxContext.Provider>

    3. 后代组件读取数据的方式：

      <!-- 第一种方式：适用于类式组件 -->
        static contextType = XxxContext // 声明接受context
        this.context对象中保存着value数据

      <!-- 第二种方式：适用各类组件 -->
        <XxxContext.Consumer>
          {
            value => 要显示的内容
          }
        </XxxContext.Consumer>
  ## 3. 注意：在应用开发中，一般不用context，一般用它来封装react插件
  
# 6. 组件优化
  ## 1.Component的两个问题
    (1) 只要执行setState()，即使不改变状态数据，组件也会重新render() ===>效率低
    (2) 只要当前组件组件重新render()，其所有子组件不管接收到的数据有无变化都会重新render()===>效率低
  ## 高效做法：只有当组件的state或props发生变化才重新render

  ## 原因：Component中shouldComponentUpdate()总是返回true

  ## 解决办法：
    (1) 重写shouldComponentUpdate(nextProps, nextState)方法，比较新旧state和props，有变化才返回true。缺点就是要手动写，state和props的keys特别多时，验证比较麻烦
    (2) React提供了PureComponent组件来代替Component，它会自动重写shouldComponentUpdate(nextProps, nextState)方法

# 7. react中slot技术实现
  类似于Vue中的slot技术，也就是通过组件标签传入结构
  1. 使用children，在父组件中渲染传入放入结构
  2. 使用render属性：传入内部标签的结构，可以传递给子组件属性
  <A render={date => <B data={data}/>}/>
  A组件：{this.props.render(this.state.data)}
  B组件：可以获取A组件传入的数据{this.props.data}

# 8. 错误边界
  ## 理解
    用来捕获后代组件的错误，并渲染出备用组件
  ## 特点
    只能捕获后代组件**生命周期**产生的错误，不能捕获自身组件产生的错误和其他组件在合成事件、定时器中的错误
  ## 使用方式
    两个错误相关的生命周期钩子函数的使用：*getDerivedStateFromError()*和*componentDidCtch()*

    // 如果捕获到子组件报错，就会调用该钩子，并传入错误内容,返回新的状态对象
    static getDerivedStateFromError(error){
      console.log(error)
      return {hasErr:error}
    }

    componentDidCatch(){
      console.log('渲染组件时出错，一般用来统计错误数据，反馈给服务器')
    }

