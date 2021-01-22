import React, { Component } from 'react'
import RectDOM from 'react-dom'


// 类式组件
class Demo1 extends Component {
  state = {
    count:0
  }

  myRef = React.createRef();

  add = ()=>{
    this.setState(state => ({count:state.count+1}))
  }
  unmount = ()=>{
    RectDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  componentDidMount(){
    this.timer = setInterval(() => {
      this.setState({count:this.state.count+1})
    }, 1000);
  }

  show = ()=>{
    console.log(this.myRef.current.value)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <h2>当求和为：{this.state.count}</h2>
        <button onClick={this.add}>+1</button>
        <button onClick={this.unmount}>卸载</button>
        <button onClick={this.show}>提示</button>
      </div>
    )
  }
}

function Demo2(){
  // 每次setCount执行就会重新执行Demo2，但是React底层保证下面这句话不会给count重新赋值
  const [count,setCount] = React.useState(0)
  const [name,setName] = React.useState('tom')

  // React.useEffect()
  React.useEffect(()=>{
    let timer = setInterval(()=>{
      setCount(count => count+1);
    }, 1000)
    // 返回一个函数相当于componentWillUnmount
    return ()=>{
      clearInterval(timer)
    }
  }, [])

  const myRef = React.useRef()

  function add(){
    // setCount(count+1)  // 第一种方式
    setCount(count => count+1) // 第二种方式：(value) => newValue函数
  }

  function changeName(){
    setName('jerry')
  }

  function show(){
    console.log(myRef.current.value)
  }
  function unmount(){
    RectDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  return (
    <div>
      <h2>当求和为：{count}</h2>
      <h3>我的名字是：{name}</h3>
      <input type="text" ref={myRef}/>
      <button onClick={add}>+1</button>&nbsp;
      <button onClick={changeName}>changeName</button>&nbsp;
      <button onClick={unmount}>卸载</button>
      <button onClick={show}>提示</button>

    </div>
  )
}

export default Demo2
