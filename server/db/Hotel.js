'use strict'

const Sequelize = require('sequelize')
const db = require('./_db')

const Hotel = db.define('hotel',  {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  num_stars: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 5,
    }
  },
  amenities: {
    type: Sequelize.TEXT
  }
})

module.exports = Hotel

