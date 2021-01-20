import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import './App.css'
/**
 * 前端路由的工作原理：<a/>设置导航区的不同地址——>点击后window.location发生变化——>路由引擎检测到window.location变化，寻找相应的组件进行局部更新：path--->component
 *    history是前端路由的基石：路由地址被点击后默认跳转被阻止，而是将a标签的href添加到BOM.history（栈）,location变成了该a标签的href
 *    同时，利用history.listern方法来监听location，地址变了就获取到该url，这样也就得到了路由路径了
 * 
 * 后端路由的工作原理：request.url解析出路径path——>路由引擎通过path，寻找相应的处理接口函数：path--->function
 */

const {Component} = React;
     
export default class App extends Component{

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className=" col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 编写路由连接 */}
                <NavLink activeClassName="myActive" className="list-group-item" to="/about">About</NavLink>
                <NavLink activeClassName="myActive" className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About}/>
                <Route path="/home" component={Home}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

