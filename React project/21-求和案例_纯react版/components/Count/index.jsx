import React, { Component } from 'react'

export default class Count extends Component {

  state = {
    count:0
  }

  increment = ()=>{
    const preValue = this.selectNumberElement.value;
    const {count} = this.state;
    this.setState({count:count + Number(preValue)})
  }

  decrement = ()=>{
    const preValue = this.selectNumberElement.value;
    const {count} = this.state;
    this.setState({count:count - Number(preValue)})
  }

  incrementIfOdd = ()=>{
    
    const preValue = this.selectNumberElement.value;
    const {count} = this.state;
    if(count % 2 ===1){
      this.setState({count:count + Number(preValue)})
    }
  }

  incrementAsync = ()=>{
    const preValue = this.selectNumberElement.value;
    const {count} = this.state;
    setTimeout(()=>{
      this.setState({count:count + Number(preValue)})
    },1000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
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
