import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles.less'

export default function Navs (props) {
  return (
    <div className="common-navs">
      <div className="nav"><NavLink exact to="/hook">首页</NavLink></div>
      <div className="nav"><NavLink exact to="/">分类</NavLink></div>
      <div className="nav">拼购</div>
      <div className="nav">购物车</div>
      <div className="nav">未登录</div>
    </div>
  )
}
