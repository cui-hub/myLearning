import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'


export default class InputHeader extends Component {
  // 对接收的props进行类型和必要性的检测
  static propTypes = {
    addTodo:PropTypes.func.isRequired,
  }
  hangdleKeyUp = (event)=>{
    const keycode = event.keyCode;
    if(keycode !== 13) return;
    this.props.addTodo(event.target.value);
    event.target.value = ''
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.hangdleKeyUp}/>
    </div>
    )
  }
}
