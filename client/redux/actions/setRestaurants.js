'use strict'

import axios from 'axios'
import actions from '../actions/actions'

const setRestaurants = (restaurants) => {
  return {
    type: actions.SET_RESTAURANTS,
    restaurants
  }
}

const fetchingRestaurants = (destinationName) => {
  return (dispatch) => {
    axios.get(`/api/destination/${destinationName}/restaurants`)
      .then(res => res.data)
      .then(restaurants => {
        dispatch(setRestaurants(restaurants))
      })
      .catch(console.error)
  }
}

export default fetchingRestaurants