import React from 'react'
import { withRouter } from 'react-router-dom'
import Com from './com'

export default @withRouter
class User extends React.Component {
  render () {
    return (
      <div className="pages-users">
        <Com />
        <h1>我是 User</h1>
      </div>
    )
  }
}
