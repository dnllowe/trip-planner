import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import initialState from './initialState'
import reducer from './reducers'

const middleware = applyMiddleware(thunk)
const store = createStore(reducer, initialState,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store