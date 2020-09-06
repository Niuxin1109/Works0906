const REDUX_INIT = '@@redux/INIT'

export function createStore (reducer, enhancer) {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer)
  }

  let currentState
  let currentReducer = reducer
  let listeners = []

  function getState() {
    return currentState
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action)

    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
    return action
  }

  dispatch({ type: REDUX_INIT })

  function subscribe(listener) {
    listeners.push(listener)
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  return {
    getState,
    dispatch,
    subscribe,
  }
}

export function combineReducers (reducers) {
  const reducerKeys = Object.keys(reducers)
  return function combination(state = {}, action) {
    const nextState = {}
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i] // reducer 函数名
      const reducer = reducers[key]
      const previousStateForKey = state[key]
      const nextStateForKey = reducer(previousStateForKey, action)
      nextState[key] = nextStateForKey
    }
    return nextState
  }
}

export function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => {
    console.log(a)
    console.log(b)
    return (...args) => {
      console.log(args, 7)
      return a(b(...args))
    }
  })
}


export function applyMiddleware (...middleware) {
  console.log(middleware, 1)
  return createStore => (...args) => {
    console.log(args, 2)
    const store = createStore(...args)
    let dispatch = () => {
      throw new Error('暂时不能调用')
    }
    console.log(store.getState, 3)
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args),
    }
    // [thunk promise]-> [m => ]
    const chains = middleware.map(m => m(middlewareAPI))
    dispatch = compose(...chains)(store.dispatch)

    return {
      ...store,
      dispatch,
    }
  }
}
