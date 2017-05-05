'use strict'

const router = require('express').Router()
const Activity = require('../db/Activity')

// UPDATE SPECIFIC ACTIVITY BY NAME
router.put('/:activityName', (req, res, next) => {
  console.log(req.params.activityName)
  Activity.findOne({
    where: { name: req.params.activityName }
  })
    .then(activity => {
      return activity.updateAttributes(req.body)
    })
    .then(activity => {
      console.log("UPDATED ACTIVITY", activity)
      res.json(activity).status(200)
    })
    .catch(console.error)
})

module.exports = router