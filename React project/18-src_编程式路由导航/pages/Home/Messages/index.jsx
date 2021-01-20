import React, { Component } from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import MessageDetail from './MessageDetail'


export default class Messages extends Component {

  state = {
    messages:[
      {id:'1', title:'message001'},
      {id:'2', title:'message002'},
      {id:'3', title:'message003'},
    ]
  }

  pushLink = (id, title)=>{
    // push跳转 + params参数形式
    // this.props.history.push(`/home/messages/detail/${id}/${title}`)

    // push跳转 + search参数形式
    // this.props.history.push(`/home/messages/detail?id=${id}&title=${title}`)

    // push跳转 + state参数形式
    this.props.history.push(`/home/messages/detail`, {id, title})
  }
  replaceLink = (id, title)=>{
    // replace跳转 + params参数形式
    // this.props.history.replace(`/home/messages/detail/${id}/${title}`)

    // replace跳转 + search参数形式
    // this.props.history.replace(`/home/messages/detail?id=${id}&title=${title}`)

    // replace跳转 + state参数形式
    this.props.history.replace(`/home/messages/detail`, {id, title})
  }
  
  back = ()=>{
    this.props.history.goBack();
  }

  forward = ()=>{
    this.props.history.goForward()
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.messages.map((msg)=>{
              return (
                <li key={msg.id}>
                  {/* 1. 向路由组件传递params的方式 */}
                  {/* <Link to={`/home/messages/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

                  {/* 2. 向路由组件传递search的方式*/}
                  {/* <Link to={`/home/messages/detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}

                  {/* 3. 向路由组件传递state的方式,优势：隐藏参数; replace可以控制history替换栈顶地址，会导致回退网址无效*/}
                  <Link replace={true} to={{pathname:'/home/messages/detail', state:{id:msg.id, title:msg.title}}}>{msg.title}</Link>
                  &nbsp;<button onClick={()=>this.pushLink(msg.id, msg.title)}>push</button>
                  &nbsp;<button onClick={()=>this.replaceLink(msg.id, msg.title)}>replace</button>

                </li>
              )
            })
          }
          
        </ul>
        <hr/>
        <Switch>
          {/* 1. 声明接收params参数 */}
          {/* <Route path="/home/messages/detail/:id/:title" component={MessageDetail}/> */}

          {/* 2. 无需声明接收search*/}
          {/* <Route path="/home/messages/detail" component={MessageDetail}/> */}

          {/* 3. 无需声明接收state*/}
          <Route path="/home/messages/detail" component={MessageDetail}/>
        </Switch>
        <button onClick={this.back}>back</button>
        <button onClick={this.forward}>forward</button>

      </div>
    )
  }
}

