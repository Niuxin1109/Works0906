
const defaultState = {
  
}

// 首页的 reduce
export default function hook (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_REGUSER':
      return { ...state, data: action.payload }

    default:
      return state
  }
}