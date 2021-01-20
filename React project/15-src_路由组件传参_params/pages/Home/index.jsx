import React, { Component } from 'react'
import News from './News'
import Messages from './Messages'
import MyNavLink from '../../components/MyNavLink'
import {Route, Switch, Redirect} from 'react-router-dom'



export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>This is Home Page !</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <a href="#" className="list-group-item">News</a> */}
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              {/* <a href="#" className="list-group-item">Messages</a> */}
              <MyNavLink to="/home/messages">Messages</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/messages" component={Messages}/>
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    )
  }
}
