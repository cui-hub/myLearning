import React ,{Component} from 'react'
import welcome from './index.module.css'

export default class Welcome extends Component{
  render(){
    return (
      <h2 className={welcome.title}>Welcome to my first React Project !</h2>
    )
  }
}