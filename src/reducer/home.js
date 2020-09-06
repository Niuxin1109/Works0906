import { handleActions } from 'redux-actions'
import { FETCH_HOME_TAGS, FETCH_HOME_CHECKBOX } from '@/constants/actionTypes'

const defaultState = {
  selectedRowKeys: [],
  data: []
}

// handleActions 创建 reduce
export default handleActions({
  [FETCH_HOME_TAGS]: (state, action) => ({ ...state, data: action.payload }),
  [FETCH_HOME_CHECKBOX]: (state, action) => ({ ...state, selectedRowKeys: [...action.payload] }),
}, defaultState)
