import { connect } from 'dva'
import React, { Component } from 'react'

class Cinema extends Component {
  componentDidMount () {
    if(this.props.list.length === 0) {
      this.props.dispatch({
        type: 'maizuo/getCinemaList'
      })
    }else{
      console.log('缓存')
    }
  }
  render() {
    return (
      <div>Cinema
        {
          this.props.list.map(item => 
              <p key={item.cinemaId}>{item.name}</p>
            )
        }

      </div>
    )
  }
}

export default connect((state)=> {
  return {
    list: state.maizuo.list
  }
})(Cinema)