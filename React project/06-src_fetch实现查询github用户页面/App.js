import React from 'react'
import './App.css'
// import axios from 'axios'
import Search from './components/Search'
import List from './components/List'


const {Component} = React;
     
export default class App extends Component{

  render(){
    return (
      <div className="container">
        <Search />
        {/* <span>显示头像需要翻墙</span> */}
        <List/>
      </div>
    )
  }
}

