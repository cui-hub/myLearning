import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// 渲染App组件到页面
ReactDOM.render(
  // <BrowserRouter>代表一个路由器对象，包在最外层，里面的所有<Link>、<Route>等都会受其管理
    <App/>
    ,
   document.getElementById('root'));