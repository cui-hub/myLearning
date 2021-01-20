
import React, { Component } from 'react'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

class Count extends Component {

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

// 利用connect()()方法创建容器组件
export default connect(
  state => ({count:state}), 

  // mapDispatchToProps的一般写法：传函数
  // dispatch => ({
  //   increment: data => dispatch(createIncrementAction(data)),
  //   decrement: data => dispatch(createDecrementAction(data)),
  //   incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time)),
  // })

  // mapDispatchToProps的简化写法：传对象，react-redux自动掉dispatch
  {
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction
  }

)(Count);



