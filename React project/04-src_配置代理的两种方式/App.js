import React from 'react'
import './App.css'
import axios from 'axios'

const {Component} = React;
// 创建并暴露外壳组件
    /***
     * 第一种配置代理的方式：
     * 
     *  1. package.json里面设置  "proxy":"http://localhost:5000"，告诉代理请求的目标地址，不要有路径
     * 
     *  2. 将axios的请求url改成项目自身服务器所在url，也就请求自身的域名，不存在跨域问题。
     * 
     *  3. 当请求发送后会先找自身项目服务器的public中的资源文件，找到则返回自身资源，找不到则把请求提交给"proxy":"http://localhost:5000"，
     * 并寻找该域名下的同名资源。因为该请求是3000服务器发送给5000服务器的，相当于 服务器<————>服务器通讯，不会经过ajax引擎，也自然无同源策略限制
     * 
     *  缺点：只能配置一个代理url
     *  优点：简单
     * 
     * ***/


     /***
     * 第二种配置代理的方式：
     * 
     *  1. 在src下创建配置文件：src/setupProxy.js
     * 
     *  2. 编写配置规则，详见setupProxy.js
     * 
     *  优点：可配置多个代理，可以灵活控制是否走代理
     *  缺点：配置有点繁琐，且必须加前缀
     * 
     * ***/
     
export default class App extends Component{

  getStudentInfo = ()=>{
    axios.get('http://localhost:3000/api1/students').then(res=>{console.log(res.data)},err=>{console.log(err)})
  }

  getCarInfo = ()=>{
    axios.get('http://localhost:3000/api2/cars').then(res=>{console.log(res.data)},err=>{console.log(err)})
  }

  render(){
    return (
      <div>
        <button onClick={this.getStudentInfo}>点我获取学生数据</button>
        <button onClick={this.getCarInfo}>点我获取汽车数据</button>
      </div>
    )
  }
}

