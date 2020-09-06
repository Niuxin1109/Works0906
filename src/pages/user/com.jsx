import React from 'react'
import { withRouter } from 'react-router-dom'

export default @withRouter
class Com extends React.Component {
  onClick = () => {
    console.log(this.props)
    // this.props.history.push('/home')
  }

  render () {
    return (
      <div className="pages-com">
        <h1 onClick={this.onClick}>Com 组件</h1>
      </div>
    )
  }
}