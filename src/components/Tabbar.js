import { NavLink } from 'dva/router'
import React, { Component } from 'react'
import style from './Tabbar.css'

export default class Tabbar extends Component {
  render() {
    return (
      <footer>
        <div><NavLink activeClassName={style.active} to={'/film'}>film</NavLink></div>
        <div><NavLink activeClassName={style.active} to={'/cinema'}>cinema</NavLink></div>
        <div><NavLink activeClassName={style.active} to={'/center'}>center</NavLink></div>
      </footer>
    )
  }
}
