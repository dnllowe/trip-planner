'use strict'

import axios from 'axios'
import actions from '../actions/actions'
import store from '../store'

const findRandomUrl = (destination) => {
  const randomIndex = Math.floor(Math.random() * destination.imageUrls.length)
  const imageUrl = destination.imageUrls[randomIndex]
  return imageUrl
}

const setBackgroundImage = (imageUrl) => {
  return {
    type: actions.SET_BACKGROUND_IMAGE,
    imageUrl
  }
}

const fetchDestination = (destinationName) => {
  return (dispatch) => {

    // Use beach image if user does not select a city
    if (destinationName === 'default') {
      dispatch(setBackgroundImage(`url(/images/beach-3.jpg)`))
      return
    }

    axios.get(`/api/destination/${destinationName}`)
      .then(res => res.data)
      .then(destination => {
        dispatch(setBackgroundImage(findRandomUrl(destination)))
      })
      .catch(console.error)
  }
}

export default fetchDestination