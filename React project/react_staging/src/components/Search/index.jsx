import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js'


export default class Search extends Component {

   search = async ()=>{
    // 获得input值（炫技：连续解构赋值+重命名）
    const {keyWordElement:{value:keyword}} = this;
    // 发送请求前要做的事情
    PubSub.publish('search',{isFirst:false, isLoading:true})
    /* 使用axios发送http请求*/ 
    // axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
    //   response=>{
    //     // 通知List更新状态
    //     PubSub.publish('search',{isLoading:false, users:response.data.items})
    //   },
    //   error=>{
    //     PubSub.publish('search',{isLoading:false, err:error.message})
    //   }
    // )

    /*fetch发送请求 :关注分离原则,第一个then只返回请求发送状态，数据隐藏在response.json()中，response.json()返回一个Promise*/
    // fetch(`https://api.github.com/search/users?q=${keyword}`).then(
    //   response=>{
    //       return response.json();
    //   },
    // ).then(
    //   data =>{
    //     console.log(data);
    //   }
    // ).catch(
    //   err =>{
    //     console.log(err)
    //   }
    // )

    /*用await优化 ,fetch使用率不高，因为兼容性不高，但是fetch window自带，并且自身为promise风格*/
    try{
      const response = await fetch(`https://api.github.com/search/users?q=${keyword}`);
      const data = await response.json();
      console.log(data)
      PubSub.publish('search',{isLoading:false, users:data.items})
    }catch(error){
      PubSub.publish('search',{isLoading:false, err:error.message})
    }
    
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
