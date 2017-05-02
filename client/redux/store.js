import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'thunk'

import initialState from './initialState'
import reducer from './reducers'

const middleWare = applyMiddleware(thunk)
const store = createStore(reducer, initialState, compose(middleWare))

export default store