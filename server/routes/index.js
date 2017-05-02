'use strict'

const router = require('express').Router()
const destination = require('./destination')
router.use('/destination', destination)

module.exports = router