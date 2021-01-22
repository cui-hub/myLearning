import React, { Component } from 'react'
import './index.css'

// 创建一个上下文对象
const MyContext = React.createContext();

export default class A extends Component {
  state = {
    userName:'tom',
    age:18
  }
  render() {
    const {userName, age} = this.state;
    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是：{userName}</h4>
        <MyContext.Provider value={{userName, age}}>
          <B/>
        </MyContext.Provider>
      </div>
    )
  }
}


class B extends Component {
  render() {
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        <C/>
        <D/>
      </div>
    )
  }
}


class C extends Component {
  // 举手声明接受context：
  static contextType = MyContext

  render() {
    return (
      <div className='grand'>
        <h3>我是C类组件</h3>
        <h4>我从A组件接到的用户名是：{this.context.userName}, 年龄: {this.context.age}</h4>
      </div>
    )
  }
}

function D(){
  return (
    <div className='grand'>
      <h3>我是D函数组件</h3>
      <h4>我从A组件接到的用户名是：  
        <MyContext.Consumer>
          {
            value => `${value.userName}, 年龄：${value.age}`
          }
        </MyContext.Consumer>
      </h4>
    </div>
  )
}
 