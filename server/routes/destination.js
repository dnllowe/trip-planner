'use strict'

const router = require('express').Router()
const Destination = require('../db/Destination')

router.get('/', (req, res, next) => {
  Destination.findAll({})
    .then(destinations => {
      res.json(destinations)
    })
    .catch(console.error)
})

router.get('/:destinationName', (req, res, next) => {
  Destination.findOne({
    where: {
      name: req.params.destinationName
    }
  })
    .then(destination => {
      res.json(destination)
    })
    .catch(console.error)
})

module.exports = router