import React, { useEffect, useState } from 'react'

let id = ''
export default function useResezi () {
  const [width, setWidth] = useState(0)
  const fn = () => {
    if (!id) {
      id = setTimeout(() => {
        id = null
        setWidth(document.body.offsetWidth)
      }, 300)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', fn)
    return () => {
      window.removeEventListener('resize', fn)
    }
  }, [])
  return width
}
