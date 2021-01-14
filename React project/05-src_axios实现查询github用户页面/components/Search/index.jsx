import React, { Component } from 'react'
import './index.css'
import axios from '../../../06-src_发布订阅实现兄弟组件通信/components/Search/node_modules/axios'

export default class Search extends Component {

  search = ()=>{
    const {updateAppState} = this.props;
    // 获得input值（炫技：连续解构赋值+重命名）
    const {keyWordElement:{value:keyword}} = this;
    // 发送请求前要做的事情
    updateAppState({isFirst:false, isLoading:true})
    // 发送http请求
    axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
      response=>{
        updateAppState({isLoading:false, users:response.data.items})
      },
      error=>{
        updateAppState({isLoading:false, err:error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-header">Search Github Users</h3>
        <div>
          <input type="text" placeholder="Enter the name you wanna search" ref={e => this.keyWordElement = e}/> &nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
