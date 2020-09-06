import React from 'react'

// 定义 (前端数据映射): 
// 为什么要有数据映射: 
// 结构
export default class Abc extends React.PureComponent {
  render () {
    const { data } = this.props

    return (
      <div className="pages-list">
        {
          data.map(({name, id, prive, sex, cb}) => {
            return <p key={id}>{cb(name)}-{cb(prive)}-{sex}</p>
          })
        }
      </div>
    )
  }
}
