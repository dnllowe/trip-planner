'use strict'

const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/trip-planner', { logging: false })

module.exports = db