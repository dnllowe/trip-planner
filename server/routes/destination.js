'use strict'

const router = require('express').Router()
const Destination = require('../db/Destination')
const Hotel = require('../db/Hotel')
const Restaurant = require('../db/Restaurant')
const Activity = require('../db/Activity')

// GET ALL DESTINATIONS
router.get('/', (req, res, next) => {
  Destination.findAll({})
    .then(destinations => {
      res.json(destinations)
    })
    .catch(console.error)
})

// GET SPECIFIC DESTINATION BY NAME
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

// UPDATE SPECIFIC DESTINATION BY NAME
router.put('/:destinationName', (req, res, next) => {
  Destination.findOne({
    where: { name: req.params.destinationName }
  })
    .then(destination => {
      return destination.updateAttributes(req.body)
    })
    .then(destination => {
      res.json(destination).status(200)
    })
    .catch(console.error)
})

// GET ALL HOTELS FOR SPECIFIC DESTINATION
router.get('/:destinationName/hotels', (req, res, next) => {
  Destination.findOne({
    where: {
      name: req.params.destinationName
    }
  })
    .then(destination => {
      return Hotel.findAll({
        where: {
          destinationId: destination.id
        }
      })
    })
    .then(hotels => {
      res.json(hotels)
    })
    .catch(console.error)
})

// GET ALL RESTAURANTS FOR SPECIFIC DESTINATION
router.get('/:destinationName/restaurants', (req, res, next) => {
  Destination.findOne({
    where: {
      name: req.params.destinationName
    }
  })
    .then(destination => {
      return Restaurant.findAll({
        where: {
          destinationId: destination.id
        }
      })
    })
    .then(restaurants => {
      res.json(restaurants)
    })
    .catch(console.error)
})

// GET ALL ACTIVITIES FOR SPECIFIC DESTINATION
router.get('/:destinationName/activities', (req, res, next) => {
  Destination.findOne({
    where: {
      name: req.params.destinationName
    }
  })
    .then(destination => {
      return Activity.findAll({
        where: {
          destinationId: destination.id
        }
      })
    })
    .then(activities => {
      res.json(activities)
    })
    .catch(console.error)
})

module.exports = router