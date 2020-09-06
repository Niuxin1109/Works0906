import React, { memo } from 'react'
import { Button } from 'antd'

const List = memo(props => {
	const { onCount } = props

  return (
    <div className="pages-list">
      <Button onClick={() => onCount('参数')}>点我</Button>
    </div>
  )
})
