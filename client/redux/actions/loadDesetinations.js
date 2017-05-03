'use strict'

import axios from 'axios'
import actions from './actions'

const fetchingDestinations = () => {
  return (dispatch, prevState) => {
    axios.get('/api/destination')
      .then(res => res.data)
      .then(destinations => {
        dispatch(loadDestinations(destinations))
    })
  }
}

const loadDestinations = (destinations) => {
  return {
    type: actions.LOAD_DESTINATIONS,
    destinations
  }
}

export default fetchingDestinations