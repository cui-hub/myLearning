import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

  state = {
    carName:'Benz 463'
  }

  changeCar = ()=>{
    this.setState(state=> ({carName:'BMW'}))
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(nextProps, nextState);
  //   console.log(this.props, this.state)
  //   return true
  // }

  render() {
    const {carName} = this.state
    console.log('Parent---render');
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <h4>车名：{carName}</h4>
        <button onClick={this.changeCar}>changeCar</button>
        <Child />
      </div>
    )
  }
}


class Child extends PureComponent {
  render() {
    console.log('Child---render');
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        {/* <h4>接到的车名：{this.props.carName}</h4> */}
      </div>
    )
  }
}