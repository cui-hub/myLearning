import React, { Component } from 'react'
import './index.css'


export default class List extends Component {
  render() {
    const {cachedUsers,users,isFirst,isLoading,err} = this.props;
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
