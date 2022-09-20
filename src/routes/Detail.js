import { connect } from 'dva'
import React, { Component } from 'react'

class Detail extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'maizuo/hide'
    })
  }
  componentWillUnmount() {
    this.props.dispatch({
      type: 'maizuo/show'
    })
  }
  render() {
    return (
      <div>Detail-{this.props.match.params.id}</div>
    )
  }
}

export default connect()(Detail)