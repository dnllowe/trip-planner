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
  imageUrl: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DOUBLE),
    allowNull: false
  },
  amenities: {
    type: Sequelize.TEXT
  }
})

module.exports = Hotel

