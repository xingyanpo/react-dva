import React, { Component } from 'react'
import request from '../utils/request'

export default class Film extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    request('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5450932',
      {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16597710112470525318201345"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }
    ).then(res => {
      console.log(res.data.data.films)
      this.setState({
        list: res.data.data.films
      })
    })
  }
  render() {
    return (
      <div>
        {
          this.state.list.map((item, index) => {
            return (
              <div key={item.filmId} onClick={()=>{
                this.props.history.push(`/detail/${item.filmId}`)
              }}>
                <p style={{fontSize:'1rem/2'}}>{item.name}</p>
              </div>
            )
          })
        }

      </div>
    )
  }
}
