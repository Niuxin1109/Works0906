import React from 'react'
import { connect } from 'react-redux'
import { FETCH_HOME_CHECKBOX, FETCH_HOME_TAGS } from '@/constants/actionTypes'
import { Tag } from 'antd'
import homeAction from '@/actions/home'
import { str } from '@/utils/string'
import './styles.less'

export default connect(({ home }) => {
  return {
    selectedRowKeys: home.selectedRowKeys,
  }
}, {
  fetchTags: homeAction[str(FETCH_HOME_TAGS)],
  fetchCheckbox: homeAction[str(FETCH_HOME_CHECKBOX)],
})(Tags)
function Tags (props) {
  const { data, selectedRowKeys, fetchCheckbox, fetchTags } = props
  const onClose = key => {
    const selected = selectedRowKeys.filter(sel => sel !== key)
    const result = data.filter(dt => dt.key !== key)
    fetchCheckbox(selected)
    fetchTags(result)
  }

  return (
    <div className="common-tags">
      {
        data.map(({ key, name }) => {
          return (
            <Tag key={key} closable onClose={() => onClose(key)}>
              {name}
            </Tag>
          )
        })
      }
    </div>
  )
}
