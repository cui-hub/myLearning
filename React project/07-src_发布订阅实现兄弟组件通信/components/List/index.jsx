import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'
import cachedUsers from'../../usercache.json'



export default class List extends Component {

  state = {
    users:[], // 用户信息
    isFirst:true, // 是否为第一次打开页面
    isLoading:false, // 是否在搜索状态
    err:'', // 存储请求相关错误信息
    cachedUsers:cachedUsers // 如果github拒绝了频繁请求，可以利用该数据展示效果
  }

  componentDidMount(){
    PubSub.subscribe('search',(_,state)=>{
      this.setState(state)
    })
  }

  render() {
    const {cachedUsers,users,isFirst,isLoading,err} = this.state;
    return (
      <div className="row">
        {
          isFirst ? <h2>Welcome to my search Page !</h2>:
          isLoading ? <h2>Loading...</h2>:
          err ? <h3 style={{color:'red'}}>{err}</h3> :
          users.length<=0 ? <h2>No such users !</h2> :
          users.map((user)=>{
            return (
              <div className="card" key={user.node_id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img src={user.avatar_url} style={{width:'100px'}} alt="avatar"/>
                </a>
              <p>{user.login}</p>
            </div>
            )
          })
        }
      </div>
    )
  }
}
