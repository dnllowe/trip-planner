'use strict'

const router = require('express').Router()
const destination = require('./destination')
const activity = require('./activity')
const session = require('./session')

router.use('/destination', destination)
router.use('/activity', activity)
router.use('/session', session)

module.exports = router