import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      // <NavLink activeClassName="myActive" className="list-group-item" to={to}>{children}</NavLink>
      // 优化写法
      <NavLink activeClassName="myActive" className="list-group-item" {...this.props}/>
    )
  }
}
