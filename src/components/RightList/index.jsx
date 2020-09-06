import React from 'react'

export default function RightList (props) {
  const { data } = props

  return (
    <div className="common-left-navs">
      {
        data.map(v => {
          return <p>{v.title}</p>
        })
      }
    </div>
  )
}

