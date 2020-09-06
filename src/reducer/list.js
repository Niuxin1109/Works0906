import _ from 'loadsh'
import { FETCH_LIST_DATA } from '@/constants/actionTypes'

const defaultState = {
  data: [],
  id: 1,
}

// 创建我们的 reduce
export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_LIST_DATA:
      const eq = state.data.findIndex(v => v.id == action.payload.id)

      if (eq != -1) {
        state.data.splice(eq, 1, action.payload)
        
      } else {
        state.data.push({ ...action.payload, id: state.id++ })
      }

      return { 
        ...state,
        data: _.cloneDeep(state.data),
      }

    default:
      return state
  }
}
