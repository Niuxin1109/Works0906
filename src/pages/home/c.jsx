import React from 'react'

export default class C extends React.PureComponent {
  setValue = evt => {
    const { setValue } = this.props
    setValue && setValue(evt.target.value)
  }

  render () {
    const { value } = this.props
    return (
      <>
        c
        <input 
          type="text" 
          onChange={this.setValue}
          value={value}
        />
      </>
    )
  }
}

