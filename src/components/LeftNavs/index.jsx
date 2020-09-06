import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function LeftNavs (props) {
  const { data, getCid } = props
  
  return (
    <div className="common-left-navs">
      {
        data.map(v => {
          return <p><NavLink to={`/hook/${v.cid}`}>{v.title}</NavLink></p>
        })
      }
    </div>
  )
}

