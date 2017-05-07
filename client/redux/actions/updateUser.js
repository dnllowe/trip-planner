'use strict'

import actions from './actions'
import axios from 'axios'

const updateUser = (user) => {
  return {
    type: actions.UPDATE_USER,
    user
  }
}

const updatingUser = (user) => {
  return (dispatch) => {
    axios.put('/api/user', user)
      .then(res => res.data)
      .then(updatedUser => {
        dispatch(updateUser(updatedUser))
      })
      .catch(console.error)
  }
}

export default updatingUser