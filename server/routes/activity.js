'use strict'

const router = require('express').Router()
const Activity = require('../db/Activity')

// UPDATE SPECIFIC ACTIVITY BY NAME
router.put('/:activityName', (req, res, next) => {
  Activity.findOne({
    where: { name: req.params.activityName }
  })
    .then(activity => {
      return activity.updateAttributes(req.body)
    })
    .then(activity => {
      res.json(activity).status(200)
    })
    .catch(console.error)
})

module.exports = router