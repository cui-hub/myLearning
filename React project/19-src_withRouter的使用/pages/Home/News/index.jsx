import React, { Component } from 'react'

export default class News extends Component {
  // 2秒后自动跳转messages页面
  componentDidMount(){
    setTimeout(()=>{
      this.props.history.push(`/home/messages`)
    },2000)
  }
  render() {
    console.log('News更新了一次')

    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    )
  }
}
