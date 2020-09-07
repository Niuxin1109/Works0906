const defaultState = {
  
}

// 创建我们的 reduce
export default function (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_ADDUSER':
      return { ...state, data: action.payload }
      case 'FETCH_USERLIST':
        return { ...state, data: action.payload }
    default:
      return state
  }
}

