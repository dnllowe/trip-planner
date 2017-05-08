'use strict'

const router = require('express').Router()
const User = require('../db/User')

// FIND OR CREATE USER FROM SESSION HISTORY
router.get('/whoami', (req, res, next) => {

  return User.findOrCreate({
    where: { sessionId: req.session.id }
  })
    .then(([user, wasCreated]) => {
    if (wasCreated) {
      console.log('NEW Session: ', req.session.id, "USER ID: ", user.id)
    } else {
      console.log('EXISTING Session: ', req.session.id, "USER ID: ", user.id)
    }
    res.json(user)
  })
  .catch(console.error)
  }
)

// UPDATE USER
router.put('/', (req, res, next) => {
  return User.find({ where: { sessionId: req.session.id } })
    .then(user => {
      return user.updateAttributes(req.body)
    })
    .then(updatedUser => {
      res.json(updatedUser)
    })
    .catch(console.error)
})

module.exports = router