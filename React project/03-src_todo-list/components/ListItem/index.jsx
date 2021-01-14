import React, { Component } from 'react'
import './index.css'
import PropTypes from 'prop-types'


export default class ListItem extends Component {
  // 对接收的props进行类型和必要性的检测
  static propTypes = {
    setDone:PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
  }
  
  state = {
    mouse:false,
  }

  mouseHandler = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  checkHandler = (id)=>{
    return (e)=>{
      this.props.setDone(id,e.target.checked)
    }
  }

  deleteTodoHandler = (id)=>{
    return (e)=>{
      if(window.confirm('确定删除吗？')){
        this.props.deleteTodo(id);
      }
    }
  }
  render() {
    const {item} = this.props;
    const {mouse} =this.state;
    return (
      <li onMouseEnter={this.mouseHandler(true)} onMouseLeave={this.mouseHandler(false)} style={{backgroundColor:mouse ? '#ddd' : '#fff'}}>
        <label>
          <input type="checkbox" checked={item.done} onChange={this.checkHandler(item.id)}/>
          <span>{item.itemName}</span>
        </label>
        <button className="btn btn-danger" style={{display: mouse ? 'inline-block' :'none'}} onClick={this.deleteTodoHandler(item.id)}>删除</button>
      </li>
    )
  }
}
