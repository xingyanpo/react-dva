import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>Login
        <button onClick={()=>{
          localStorage.setItem('token', 'hhh')
          this.props.history.push('/center')
        }}>登录</button>
      </div>
    )
  }
}
