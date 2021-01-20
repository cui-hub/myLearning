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
                  <Link to={`/home/messages/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>

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
          <Route path="/home/messages/detail" component={MessageDetail}/>
        </Switch>
      </div>
    )
  }
}
