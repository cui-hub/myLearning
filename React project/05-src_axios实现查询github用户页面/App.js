import React from 'react'
import './App.css'
// import axios from 'axios'
import Search from './components/Search'
import List from './components/List'
import cachedUsers from'./usercache.json'


const {Component} = React;
     
export default class App extends Component{
  state = {
    users:[], // 用户信息
    isFirst:true, // 是否为第一次打开页面
    isLoading:false, // 是否在搜索状态
    err:'', // 存储请求相关错误信息
    cachedUsers:cachedUsers // 如果github拒绝了频繁请求，可以利用该数据展示效果
  }

  updateAppState = (state)=>{
    this.setState(state)
  }

  render(){
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        {/* <span>显示头像需要翻墙</span> */}
        <List {...this.state}/>
      </div>
    )
  }
}

