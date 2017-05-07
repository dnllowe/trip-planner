'use strict'

const Sequelize = require('sequelize')
const db = require('./_db')

// User model will hold information on user's trip
// The array for hotels, restaurants, etc
// Will hold the id of the model at index 0, and the day number at index 1

const User = db.define('user', {
  hotels: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER))
  },
  restaurants: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER))
  },
  activities: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER))
  },
  destinations: {
    type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER))
  }
}, {
    instanceMethods: {
      deleteDay: function (deletedDay) {

        this.hotels.forEach((hotel, index, hotels) => {
          // If hotel falls on day above deleted day, lower its day number
          if (hotel[1] > deletedDay) {
            hotel[1]--
          } else if (hotel[1] === deletedDay) {
            // If hotel falls on deleted day, remove it from the array
            hotels = hotels.splice(index, 1)
          }
        })

        this.restaurants.forEach((restaurant, index, restaurants) => {
          // If restaurant falls on day above deleted day, lower its day number
          if (restaurant[1] > deletedDay) {
            restaurant[1]--
          } else if (restaurant[1] === deletedDay) {
            // If restaurant falls on deleted day, remove it from the array
            restaurants = restaurants.splice(index, 1)
          }
        })

        this.activities.forEach((activity, index, activities) => {
          // If activity falls on day above deleted day, lower its day number
          if (activity[1] > deletedDay) {
            activity[1]--
          } else if (activity[1] === deletedDay) {
            // If activity falls on deleted day, remove it from the array
            activities = activities.splice(index, 1)
          }
        })
    }
  }
})

module.exports = User