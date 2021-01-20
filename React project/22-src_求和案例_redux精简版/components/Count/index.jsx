import React, { Component } from 'react'
// 引入store
import store from '../../redux/store'

export default class Count extends Component {

  // componentDidMount(){
  //   // 检测store变化，因为redxu没有做成响应式,所以要手动设置响应式，但是不能直接调render()
  //   // 可以将订阅放在入口文件index.js，这样只需要一次订阅，所有都会更新，效率不会受到很大影响，因为有diffing算法在
  //   store.subscribe(()=>{
  //     this.setState({});
  //   })
  // }

  increment = ()=>{
    const preValue = this.selectNumberElement.value;
    // 通知redux进行操作
    store.dispatch({
      type:'increment',
      data:Number(preValue)
    })
  }

  decrement = ()=>{
    const preValue = this.selectNumberElement.value;
    // 通知redux进行操作
    store.dispatch({
      type:'decrement',
      data:Number(preValue)
    })
  }

  incrementIfOdd = ()=>{
    const preValue = this.selectNumberElement.value;
    const count = store.getState();
    if(count % 2 !== 0){
      store.dispatch({
        type:'increment',
        data:Number(preValue)
      })
    }
  }

  incrementAsync = ()=>{
    const preValue = this.selectNumberElement.value;
    setTimeout(()=>{
      store.dispatch({
        type:'increment',
        data:Number(preValue)
      })
    },1000)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
