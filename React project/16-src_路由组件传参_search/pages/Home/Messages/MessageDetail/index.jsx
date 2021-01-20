import React, { Component } from 'react'
import qs from 'querystring'


const data = {
  '1':'农夫山泉，有点甜',
  '2':'组件传递参数',
  '3':'路由组件'
}
export default class MessageDetail extends Component {
  render() {
    console.log(this.props)

    // 接收params参数
    // const {id, title} = this.props.match.params;

    // 接收search参数
    const {search} = this.props.location;
    const {id, title} = qs.parse(search.slice(1));
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{data[id]}</li>
      </ul>
    )
  }
}
