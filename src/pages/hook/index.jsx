import React, { useEffect, useState, useMemo, useRef } from 'react'

export default function Hook () {
  // 初始化 ref
  // ref 在整个生命周期内不会变化
  const ref = useRef(null) 
  const refTwo = useRef(null) 
  const [count, setCount] = useState(0)

  useEffect(() => {
    // 获取当前节点
    setCount(count + 1)
  }, [ref])

  useEffect(() => {
    // 缓存上一次的值
    refTwo.current = count
  }, [refTwo])

  return (
    <div className="pages-home">
      <p ref={ref}>ref例子</p>
    </div>
  )
}
