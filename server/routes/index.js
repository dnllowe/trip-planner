'use strict'

const router = require('express').Router()
const destination = require('./destination')
const activity = require('./activity')
const user = require('./user')

router.use('/destination', destination)
router.use('/activity', activity)
router.use('/user', user)

module.exports = router