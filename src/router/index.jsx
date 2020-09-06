import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Login, Home, Lx, List, Basic, Hoc, Hook, App } from './assembly'

export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/hook" component={Hook} />
          <Route path="/lx" component={Lx} />
          <Route path="/list" component={List} />
          <Route path="/hoc" component={Hoc} />
          <Route path="/:id" component={Basic} />
        </Switch>
      </BrowserRouter>
    )
  }
}
