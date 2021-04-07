import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  state = {
    hasErr:''
  }

  // 如果捕获到子组件报错，就会调用该钩子，并传入错误内容,返回状态对象
  static getDerivedStateFromError(error){
    console.log(error)
    return {hasErr:error}
  }

  componentDidCatch(){
    console.log('渲染组件时出错，一般用来统计错误数据，反馈给服务器')
  }
  
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        {/* 开发模式并不会长时间展示<h2> */}
        {this.state.hasErr ? <h2>当前网络不稳定，稍后再试</h2>:<Child/>}
      </div>
    )
  }
}
