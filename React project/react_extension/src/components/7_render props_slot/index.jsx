import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {

  render() {
    return (
      <div className="parent">
        <h3>Parent Component</h3>
        <A render={(name)=><B name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {
  state = {
    name:'tom'
  }
  render() {
    return (
      <div className="a">
        <h3>A Component</h3>
        {/* 组件内部预留插槽 */}
        {this.props.render(this.state.name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        <h3>B Component</h3>
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}
