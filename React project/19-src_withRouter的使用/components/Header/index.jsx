import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

class Header extends Component {



  back = ()=>{
    this.props.history.goBack();
  }

  forward = ()=>{
    this.props.history.goForward()
  }

  render() {
    console.log('Header更新了一次')
    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        &nbsp;<button onClick={this.back}>back</button>
        &nbsp;<button onClick={this.forward}>forward</button>
      </div>
    )
  }
}


// withRouter将一般组件加工后也携带有路由组件的history、location、match，返回值是一个新组件
export default withRouter(Header)
