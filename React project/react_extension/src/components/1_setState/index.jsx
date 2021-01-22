import React, { Component } from 'react'

export default class Demo extends Component {
  state = {
    count:0,
    x:0
  }

  add = ()=>{
    // 对象式setState
    /*const {count} = this.state;
    this.setState({count:count+1}, ()=>{
      console.log(this.state.count)
    })
    console.log(this.state.count)*/

    // 函数式setState
    this.setState((state, props)=>{
      return {count:state.count+1, x:props.x}
    },
    ()=>{
      console.log(this.state.count)
    })
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <h2>x的值：{this.state.x}</h2>
        <button onClick={this.add}>+1</button>
      </div>
    )
  }
}
