import React,{Component} from 'react'
// 样式模块化：给样式文件名+.module中间名，然后import便可以将样式文件模块化一个样式对象
// 目的就是防止css样式名冲突，后来样式覆盖前期样式。方便起见可以用样式预处理语言less等
import hello from './index.module.css'

export default class Hello extends Component{
  render(){
    return (
      <h1 className={hello.title}>Hello React !</h1>
    )
  }
}