import React from 'react'
import './App.css'
import InputHeader from './components/InputHeader'
import List from './components/List'
import Footer from './components/Footer'

const {Component} = React;
// 创建并暴露外壳组件
export default class App extends Component{
  
  state = {
    todos:[
      {id:1, itemName:'吃饭', done:true},
      {id:2, itemName:'睡觉', done:false},
      {id:3, itemName:'写代码', done:true},
    ],
    
  }
  addTodo = (data)=>{
    const {todos} = this.state;
    if(data === '') return;
    let todo = {id:Date.now(), itemName:data, done:false};
    this.setState({todos:[todo, ...todos]})
  }

  setDone = (id,done)=>{
    const {todos} = this.state;
    for(let todo of todos){
      if(todo.id === id){
        todo.done = done;
        break;
      }
    }
    this.setState({todos:todos});
  }

  deleteTodo = (id)=>{
    const {todos} = this.state;
    let newTodos = todos.filter((todo)=>{
      return todo.id !== id
    })
    this.setState({todos:newTodos})
  }

  selectAll = (done)=>{
    const {todos} = this.state;
    todos.forEach((todo)=>{
      todo.done = done;
    })
    this.setState({todos:todos})
  }

  clearFinishedTodos = ()=>{
    const {todos} = this.state;
    const newTodos = todos.filter((todo)=>{
      return !todo.done;
    })
    this.setState({todos:newTodos})
  }

  render(){
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <InputHeader addTodo={this.addTodo}/>
          <List todos={this.state.todos} setDone={this.setDone} deleteTodo={this.deleteTodo}/>
          <Footer selectAll={this.selectAll} todos={this.state.todos} clearFinishedTodos={this.clearFinishedTodos}/>
        </div>
      </div>
    )
  }
}

