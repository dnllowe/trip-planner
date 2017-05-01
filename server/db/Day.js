'use strict'

const Sequelize = require('sequelize')
const db = require('./_db')

const Day = db.define('day', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
    hooks: {
      beforeDestroy: function (day) {
        return Day.findAll({
          where: {
            number: { $gt: day.number }
          }
        })
        .then(daysToDecrement => {
          let promises = []
          daysToDecrement.forEach(day => {
            day.number--
            promises.push(day.save())
          })
          return Promise.all(promises)
        })
        .catch(console.error)
    }
  }
})

module.exports = Day