import { createActions } from 'redux-actions'
import { FETCH_HOME_TAGS, FETCH_HOME_CHECKBOX } from '@/constants/actionTypes'
import { post } from '@/utils/request'
import url from '@/services/api'

// createActions 创建 action
export default createActions({
  [FETCH_HOME_TAGS]: options => post(url.listWithPage, options),
  [FETCH_HOME_CHECKBOX]: options => options,
})
