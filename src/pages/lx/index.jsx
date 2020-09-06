import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { getData, setObj } from '@/actions/lx'

export default @connect(state => {
  return {
    data: state.lx.data,
    count: state.lx.count,
    obj: state.lx.obj,
  }
}, {
  getData,
  setObj,
})
class Lx extends React.Component {
  onClick = () => {
    this.props.setObj('小白')
  }

  render () {
    const { obj } = this.props
    return (
      <div className="pages-lx">
        <h1>{ obj.name }</h1>
        <Button onClick={this.onClick}>点击我</Button>
      </div>
    )
  }
}
