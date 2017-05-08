'use strict'

import axios from 'axios'
import actions from '../actions/actions'

const setActivities = (activities) => {
  return {
    type: actions.SET_ACTIVITIES,
    activities
  }
}

const fetchingActivities = (destinationName) => {
  return (dispatch) => {

    if (destinationName === 'default') {
      dispatch(setActivities([]))
    } else {
        axios.get(`/api/destination/${destinationName}/activities`)
          .then(res => res.data)
          .then(activities => {
            dispatch(setActivities(activities))
          })
          .catch(console.error)
    }
  }
}

export default fetchingActivities