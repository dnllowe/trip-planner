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

Day.belongsTo(Hotel)
Day.belongsToMany(Activity, { through: 'day-activity' })
Day.belongsToMany(Restaurant, { through: 'day-restaurant' })

module.exports = db