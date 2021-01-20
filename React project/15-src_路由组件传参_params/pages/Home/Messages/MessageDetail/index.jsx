import React, { Component } from 'react'


const data = {
  '1':'农夫山泉，有点甜',
  '2':'组件传递参数',
  '3':'路由组件'
}
export default class MessageDetail extends Component {
  render() {
    console.log(this.props)
    const {id, title} = this.props.match.params;
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{data[id]}</li>
      </ul>
    )
  }
}
