'use strict'

import axios from 'axios'
import actions from './actions'

const fetchingUser = () => {
  return (dispatch) => {
    axios.get('/api/user/whoami')
      .then(res => res.data)
      .then(user => {
        dispatch(setUser(user))
    })
  }
}

const setUser = (user) => {
  return {
    type: actions.SET_USER,
    user
  }
}

export default fetchingUser