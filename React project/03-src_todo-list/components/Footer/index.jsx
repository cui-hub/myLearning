import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'


export default class Footer extends Component {
  static propTypes = {
    todos:PropTypes.array.isRequired,
    selectAll:PropTypes.func.isRequired,
    clearFinishedTodos:PropTypes.func.isRequired
  }

  selectAll = (e)=>{
    this.props.selectAll(e.target.checked);
  }

  clearFinishedTodos = ()=>{
    if(window.confirm('确定清除已完成事项？')){
      this.props.clearFinishedTodos();
    }
  }
  
  render() {
    const {todos} = this.props;
    const finishNum = todos.reduce((pre,cur)=>{
      return pre + (cur.done ? 1 : 0)
    }, 0)
    const totalNum = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.selectAll} checked={finishNum === totalNum && totalNum!==0 ? true : false}/>
        </label>
        <span>
          <span>已完成{finishNum}</span> / 全部{totalNum}
        </span>
        <button className="btn btn-danger" onClick={this.clearFinishedTodos}>清除已完成任务</button>
      </div>
    )
  }
}
