'use strict'

import React from 'react'

class Trip extends React.Component {

  constructor() {
    super()

    this.hotelsButton = this.refs.hotelsButton
    this.hotelsMenu = this.refs.hotelsMenu
    this.restaurantsButton = this.refs.restaurantsButton
    this.restaurantsMenu = this.refs.restaurantsMenu
    this.activityButton = this.refs.activityButton
    this.activityMenu = this.refs.activityMenu

    this.toggleHotelMenu = this.toggleHotelMenu.bind(this)
    this.hideHotelMenu = this.hideHotelMenu.bind(this)

    this.toggleRestaurantMenu = this.toggleRestaurantMenu.bind(this)
    this.hideRestaurantMenu = this.hideRestaurantMenu.bind(this)

    this.toggleActivityMenu = this.toggleActivityMenu.bind(this)
    this.hideActivityMenu = this.hideActivityMenu.bind(this)
  }

  hotelButtonClick() {

    this.toggleHotelMenu()
    this.hideRestaurantMenu()
    this.hideActivityMenu()
  }

  restaurantButtonClick() {

    this.toggleRestaurantMenu()
    this.hideotelMenu()
    this.hideActivityMenu()
  }

  activityButtonClick() {

    this.toggleActivityMenu()
    this.hideHotelMenu()
    this.hideRestaurantMenu()
  }

  toggleHotelMenu() {
    this.hotelsButton.classList.toggle('nav-not-selected')
    this.hotelsButton.classList.toggle('nav-selected')
    this.hotelsMenu.classList.toggle('hide')
    this.hotelsMenu.classList.toggle('reveal')
  }

  hideHotelMenu() {
    this.hotelsButton.classList.add('nav-not-selected')
    this.hotelsButton.classList.remove('nav-selected')
    this.hotelsMenu.classList.add('hide')
    this.hotelsMenu.classList.remove('reveal')
  }

  toggleRestaurantMenu() {
    this.restaurantsButton.classList.toggle('nav-not-selected')
    this.restaurantsButton.classList.toggle('nav-selected')
    this.restaurantsMenu.classList.toggle('hide')
    this.restaurantsMenu.classList.toggle('reveal')
  }

  hideRestaurantMenu() {
    this.restaurantsButton.classList.add('nav-not-selected')
    this.restaurantsButton.classList.remove('nav-selected')
    this.restaurantsMenu.classList.add('hide')
    this.restaurantsMenu.classList.remove('reveal')
  }

  toggleActivityMenu() {
    this.activitiesButton.classList.toggle('nav-not-selected')
    this.activitiesButton.classList.toggle('nav-selected')
    this.activitiesMenu.classList.toggle('hide')
    this.activitiesMenu.classList.toggle('reveal')
  }

  hideActivityMenu() {
    this.activitiesButton.classList.add('nav-not-selected')
    this.activitiesButton.classList.remove('nav-selected')
    this.activitiesMenu.classList.add('hide')
    this.activitiesMenu.classList.remove('reveal')
  }

  render() {
    console.log(this.props)
    return (
      <div>
        // NAV BAR
        <div className='row center-text' id='navbar'>

          {/*HOTELS*/}
          <div className='col-sm-4 col-xs-12 center-text no-padding'>
            <button className='nav-button nav-not-selected' ref='hotelsButton'>HOTELS</button>
            <ul className='subnav-menu hide no-padding' ref='hotelsMenu'>
              {this.props.hotels.map(hotel => {
                return <li value={hotel.name} type='hotelListItem'>{hotel.name}</li>
              })}
            </ul>

            {/*CONTENT FOR RESTAURANT CONTENT ON MENU ROLLOVER*/}
            <div className='hidden-xs center-text no-padding hide text-1-5em margin-top-100px' id='restaurantsContent'></div>

            {/*CONTENT FOR ACTIVITIES CONTENT ON MENU ROLLOVER*/}
            <div className='hidden-xs center-text no-padding hide text-1-5em margin-top-100px' id='activitiesContent'></div>
          </div>


          {/*RESTAURANTS*/}
          <div className='col-sm-4 col-xs-12 center-text no-padding'>
            <button className='nav-button nav-not-selected' ref='restaurantsButton'>RESTAURANTS</button>

            <ul className='subnav-menu hide no-padding' ref='restaurantsMenu'>
              {this.props.restaurants.map(restaurant => {
                return <li value={restaurant.name} type='restaurantListItem'>{restaurant.name}</li>
              })}
            </ul>

            {/*IMAGE FOR HOTELS CONTENT ON MENU ROLLOVER*/}
            <img className='subnav-image hidden-xs no-padding hide margin-top-100px' id='hotelsImage'></img>

            {/*IMAGE FOR ACTIVITIES CONTENT ON MENU ROLLOVER*/}
            <img className='subnav-image hidden-xs no-padding hide margin-top-100px' id='activitiesImage'></img>
          </div>


          {/*ACTIVITIES*/}
          <div className='col-sm-4 col-xs-12 center-text no-padding'>
            <button className='nav-button nav-not-selected' ref='activitiesButton'>THINGS TO DO</button>
            <ul className='subnav-menu hide no-padding' ref='activitiesMenu'>
              {this.props.activities.map(activity => {
                return <li value={activity.name} type='activitiesListItem'>{activity.name}</li>
              })}
            </ul>

            {/*CONTENT FOR HOTEL CONTENT ON MENU ROLLOVER*/}
            <div className='hidden-xs center-text no-padding hide text-1-5em margin-top-100px' id='hotelsContent'></div>

            {/*IMAGE FOR RESTAURANTS CONTENT ON MENU ROLLOVER*/}
            <img className='subnav-image hidden-xs no-padding hide margin-top-100px' id='restaurantsImage'></img>
          </div>
      </div>

      <div className='row'>
        <div className='map col-sm-8 col-xs-12' id='map-canvas'></div>
        <div className='col-sm-4 col-xs-12 center-text' id='day'>
            Day 1:
            <hr style={{backgroundColor: 'black'}} />
            <ul className='center=text no-padding'>
                <li>Something</li>
                <li>Something.. else</li>
                <li>One last something</li>
            </ul>
        </div>
        <div
          className='center-text'
          style={{
            position: 'absolute',
            bottom: '10px',
            width: '100%',
            fontSize: '0.75em',
            fontWeight: 'normal'}}
        >
          HOME | ABOUT | CONTACT
        </div>
      </div>
    </div>
    )
  }
}

export default Trip