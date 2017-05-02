'use strict'

const Sequelize = require('sequelize')
const db = require('./_db')

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
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
  age_range: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Activity