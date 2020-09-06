import React from 'react'

export default class User extends React.PureComponent {
  // shouldComponentUpdate (nextProps, nextState) {
  //   if (nextProps.name === this.props.name) {
  //     console.log('不渲染')
  //     return false
  //   }
  //   console.log('渲染')
  //   return true
  // }

  render () {
    const { name } = this.props
    console.log(1)
    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}