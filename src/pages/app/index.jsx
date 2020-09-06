import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import homeA from '@/actions/home'
import './styles.less'

export default @connect(state => {
  return {
    abc: state.home.abc,
  }
}, {
  getAbc: homeA['abc'],
})
class App extends React.Component {
  state = {
    data: { name: '小花', age: 25 },
  }

  onClick = () => {
    this.props.getAbc()
    console.log(1)
  }
  
  render() {
    const { abc } = this.props
    console.log(abc, 'zzz')
    return (
      <div className="pages-app">
        {abc.name} - {abc.age}
        <Button onClick={this.onClick}>点我</Button>
      </div>
    )
  }
}



