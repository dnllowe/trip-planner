'use strict'

import initialState from '../initialState'
import actions from '../actions/actions'

const reducer = (prevState = initialState, action) => {

  let newState = Object.assign({}, prevState)

  switch (action.type) {
    case actions.LOAD_DESTINATIONS:
      newState.destinations = action.destinations
      break
    default:
      return prevState
  }

  return newState
}

export default reducer