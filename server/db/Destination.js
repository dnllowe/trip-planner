'use strict'

const Sequelize = require('sequelize')
const db = require('./_db')

const Destination = db.define('destination', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.DOUBLE),
    allowNull: false
  }
})

module.exports = Destination