const defaultState = {
  dataMenu: [],
  dataList: [],
}

// 首页的 reduce
export default function hook (state = defaultState, action) {
  switch (action.type) {
    case 'FETCH_HOOK_MENU':
      return { ...state, dataMenu: action.payload.data.data }

    case 'FETCH_HOOK_LIST':
      return { ...state, dataList: action.payload.data.data }

    default:
      return state
  }
}