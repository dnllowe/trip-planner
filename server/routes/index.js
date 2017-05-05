'use strict'

const router = require('express').Router()
const destination = require('./destination')
const activity = require('./activity')

router.use('/destination', destination)
router.use('/activity', activity)

module.exports = router