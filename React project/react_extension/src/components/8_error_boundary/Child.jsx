import React, { Component } from 'react'

export default class Child extends Component {

  state = {
    // users:[
    //   {id:'001',name:'Tom', age:15},
    //   {id:'002',name:'Jerry', age:25},
    //   {id:'003',name:'Stephen', age:18},
    // ]
    users:'abc'
  }
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        {
          this.state.users.map((user)=>{
            return <h4 key={user.id}>{user.name}------{user.age}</h4>
          })
        }
      </div>
    )
  }
}
