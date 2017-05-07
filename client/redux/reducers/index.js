'use strict'

import initialState from '../initialState'
import actions from '../actions/actions'

const reducer = (prevState = initialState, action) => {

  let newState = Object.assign({}, prevState)

  switch (action.type) {
    case actions.SET_USER:
      newState.user = action.user
      break
    case actions.LOAD_DESTINATIONS:
      newState.destinations = action.destinations
      break
    case actions.SET_DESTINATION:
      newState.currentDestination = action.destination
      break
    case actions.SET_BACKGROUND_IMAGE:
      newState.bgImage = action.imageUrl
      break
    case actions.SET_HOTELS:
      newState.hotels = action.hotels
      break
    case actions.SET_RESTAURANTS:
      newState.restaurants = action.restaurants
      break
    case actions.SET_ACTIVITIES:
      newState.activities = action.activities
      break
    default:
      return prevState
  }

  return newState
}

export default reducer