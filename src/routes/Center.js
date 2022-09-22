import { withRouter } from 'dva/router'
import React, { Component } from 'react'
import request from '../utils/request'

export default class Center extends Component {
  state = {
    hot: []
  }
  componentDidMount() {
    request('/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E6%B5%B7&ci=10&channelId=4').then(
      res => {
        console.log(res.data.data.hot)
        this.setState({
          hot: res.data.data.hot
        })
      }
    )
  }
  render() {
    return (
      <div>Center
        <WithChild/>
      </div>
    )
  }
}

class Child extends Component{
  render() {
    return <div>
      <button onClick={()=>{
        console.log(this.props)
        localStorage.removeItem('token')
        this.props.history.push('login')
      }}>退出登录</button>
    </div>
  }
}

const WithChild = withRouter(Child)