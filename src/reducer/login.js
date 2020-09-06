const defaultState = {
  data: [],
}

// 首页的 reduce
export default function hook (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_LOGIN':
      return { ...state, data: action.payload }

    default:
      return state
  }
}