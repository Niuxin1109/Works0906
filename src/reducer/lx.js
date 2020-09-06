import _ from 'loadsh'

const defaultState = {
  data: [],
  count: 0,
  title: 'lx',
  // 123
  obj: { name: '小花' },
}

// 创建我们的 reduce
export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_LX_DATA':
      return { 
        ...state, 
        data: action.payload.result.list,
        count: action.payload.result.count,
      }

    case 'FETCH_LX_OBJ':
      state.obj.name = action.payload
      return { ...state, obj: _.cloneDeep(state.obj)}

    default:
      break;
  }
  return state
}

