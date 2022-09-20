import { connect } from 'dva'
import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'

class App extends Component {
  render() {
  console.log(this.props)
    return (
      <div>
        {this.props.children}
        {this.props.isShow && <Tabbar></Tabbar>}
      </div>
    )
  }
}

export default  connect((state)=>{
  return {
    isShow: state.maizuo.isShow
  }
})(App)