import React from 'react'

export default class A extends React.PureComponent {
  constructor (props) {
    super(props)
    console.log(3)
  }

  componentDidMount () {
    console.log(4)
  }

  componentWillReceiveProps () {
    console.log(5)
  }

  render () {
    console.log(8)
    return (
      <div className="pages-home">
        {this.props.name}
      </div>
    )
  }
}
