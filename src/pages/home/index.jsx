import React from 'react'
import { connect } from 'react-redux'
import abc from '@/actions/home'
import './styles.less'

export default @connect(state => ({
  data: state.home.data,
}), {
  ddd: abc.fetchHomeTags,
})
class Home extends React.PureComponent {
  state = {
    name: '小花'
  }

  componentDidMount () {
    setTimeout(this.props.ddd, 5000)
  }
  
  render () {
    return (
      <div>
        {JSON.stringify(this.props.data)}
      </div>
    )
  }
}
