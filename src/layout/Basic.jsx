import React from 'react'
import { Switch, NavLink, Route } from 'react-router-dom'
import { Detail, Form, Home } from '@/router/assembly'
import './styles.less'

export default class Basic extends React.Component {
  render () {
    return (
      <div className="layout-basic">
        {/* 首页 分类 购物车 */}
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/form" component={Form} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    )
  }
}
