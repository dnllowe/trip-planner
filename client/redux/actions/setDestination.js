'use strict'

import axios from 'axios'
import actions from '../actions/actions'

const setDestination = (destination) => {
  return {
    type: actions.SET_DESTINATION,
    destination
  }
}

const fetchingDestination = (destinationName) => {
  return (dispatch) => {
    if (destinationName === 'default') {
      dispatch(setDestination(null))
    } else {
        axios.get(`/api/destination/${destinationName}`)
          .then(res => res.data)
          .then(destination => {
            dispatch(setDestination(destination))
          })
          .catch(console.error)
    }
  }
}

export default fetchingDestination