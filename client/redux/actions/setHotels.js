'use strict'

import axios from 'axios'
import actions from '../actions/actions'

const setHotels = (hotels) => {
  return {
    type: actions.SET_HOTELS,
    hotels
  }
}

const fetchingHotels = (destinationName) => {
  return (dispatch) => {

    if (destinationName === 'default') {
      dispatch(setHotels([]))
    } else {
        axios.get(`/api/destination/${destinationName}/hotels`)
          .then(res => res.data)
          .then(hotels => {
            dispatch(setHotels(hotels))
          })
          .catch(console.error)
    }
  }
}

export default fetchingHotels