import React, { Component } from 'react'
import ListItem from '../ListItem'
import  './index.css'
import PropTypes from 'prop-types'


export default class List extends Component {
  // 对接收的props进行类型和必要性的检测
  static propTypes = {
    todos:PropTypes.array.isRequired,
    setDone:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }

  setDone = (id,done)=>{
    this.props.setDone(id,done)
  }

  deleteTodo = (id)=>{
    this.props.deleteTodo(id);
  }
  
  render() {
    return (
      <ul className="todo-main">
        {
          this.props.todos.map((item)=>{
            return <ListItem item={item} key={item.id} setDone={this.setDone} deleteTodo={this.deleteTodo}/>
          })
        }
      </ul>
    )
  }
}
