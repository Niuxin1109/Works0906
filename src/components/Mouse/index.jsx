import React, { useEffect, useState } from 'react'

let id = ''
export default function useMouse () {
  const [xy, setXy] = useState({ x: 0, y: 0 })
  const fn = evt => {
    if (!id) {
      id = setTimeout(() => {
        id = null
        setXy({ x: evt.clientX, y: evt.clientY })
      }, 100)
    }
  }
  useEffect(() => {
    document.addEventListener('mousemove', fn)
    // 卸载阶段
    return () => {
      document.removeEventListener('mousemove', fn)
    }
  }, [])
  return xy
}
