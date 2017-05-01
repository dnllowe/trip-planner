'use strict'

const Sequelize = require('sequelize')
const db = require('./_db')

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cuisine: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 5,
    }
  }
})

module.exports = Restaurant