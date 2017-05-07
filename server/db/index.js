'use strict'

const Sequelize = require('sequelize')
const db = require('./_db')
const Activity = require('./Activity')
const Hotel = require('./Hotel')
const Restaurant = require('./Restaurant')
const Day = require('./Day')
const Destination = require('./Destination')

Hotel.belongsTo(Destination)
Activity.belongsTo(Destination)
Restaurant.belongsTo(Destination)

module.exports = db