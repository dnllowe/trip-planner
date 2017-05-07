'use strict'

const router = require('express').Router()
const User = require('../db/User')

router.use('/', (req, res, next) => {
  return User.findOrCreate({
    where: { sessionId: req.session.id }
  })
  .then((wasFound, user) => {
    if (wasFound) {
      console.log('EXISTING Session User ID: ', req.session.id, "ID: ", user.id)
    } else {
      console.log('NEW Session User ID: ', req.session.id), "ID: ", user.id
    }
  })
  .then(() => next())
  .catch(console.error)
  }
)

module.exports = router