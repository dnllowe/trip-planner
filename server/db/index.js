'use strict'

const Sequelize = require('sequelize')
const db = require('./_db')
const Activity = require('./Activity')
const Hotel = require('./Hotel')
const Restaurant = require('./Restaurant')
const Destination = require('./Destination')
const User = require('./User')

Hotel.belongsTo(Destination)
Activity.belongsTo(Destination)
Restaurant.belongsTo(Destination)

module.exports = db