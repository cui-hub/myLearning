import React, { Component } from 'react'
import {Button, DatePicker} from 'antd'
import {WechatOutlined} from '@ant-design/icons'

export default class App extends Component {
  render() {
    return (
      <div>
        App
        <button >原生按钮</button>
        <Button type="primary">primary button</Button>
        <DatePicker/>
        <WechatOutlined/>
      </div>
    )
  }
}
