import React, { Component } from 'react'

export default class Count extends Component {

  increment = ()=>{
    const preValue = this.selectNumberElement.value;
    this.props.increment(Number(preValue))
  }

  decrement = ()=>{
    const preValue = this.selectNumberElement.value;
    this.props.decrement(Number(preValue))
  }

  incrementIfOdd = ()=>{
    const preValue = this.selectNumberElement.value;
    if(this.props.count % 2 !==0){
      this.props.increment(Number(preValue))
    }
  }

  incrementAsync = ()=>{
    const preValue = this.selectNumberElement.value;
    this.props.incrementAsync(Number(preValue), 1000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selectNumberElement = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>Increment when odd</button>&nbsp;
        <button onClick={this.incrementAsync}>Increment async</button>

      </div>
    )
  }
}
