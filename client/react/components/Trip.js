'use strict'

import React from 'react'

class Trip extends React.Component {

  constructor() {

    super()

    this.hotelButtonClick = this.hotelButtonClick.bind(this)
    this.toggleHotelMenu = this.toggleHotelMenu.bind(this)
    this.hideHotelMenu = this.hideHotelMenu.bind(this)

    this.restaurantButtonClick = this.restaurantButtonClick.bind(this)
    this.toggleRestaurantMenu = this.toggleRestaurantMenu.bind(this)
    this.hideRestaurantMenu = this.hideRestaurantMenu.bind(this)

    this.activityButtonClick = this.activityButtonClick.bind(this)
    this.toggleActivityMenu = this.toggleActivityMenu.bind(this)
    this.hideActivityMenu = this.hideActivityMenu.bind(this)
  }

  hotelButtonClick() {
    console.log('CLICKED', this.refs)
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
    this.refs.hotelsButton.classList.toggle('nav-not-selected')
    this.refs.hotelsButton.classList.toggle('nav-selected')
    this.refs.hotelsMenu.classList.toggle('hide')
    this.refs.hotelsMenu.classList.toggle('reveal')
  }

  hideHotelMenu() {
    this.refs.hotelsButton.classList.add('nav-not-selected')
    this.refs.hotelsButton.classList.remove('nav-selected')
    this.refs.hotelsMenu.classList.add('hide')
    this.refs.hotelsMenu.classList.remove('reveal')
  }

  toggleRestaurantMenu() {
    this.refs.restaurantsButton.classList.toggle('nav-not-selected')
    this.refs.restaurantsButton.classList.toggle('nav-selected')
    this.refs.restaurantsMenu.classList.toggle('hide')
    this.refs.restaurantsMenu.classList.toggle('reveal')
  }

  hideRestaurantMenu() {
    this.refs.restaurantsButton.classList.add('nav-not-selected')
    this.refs.restaurantsButton.classList.remove('nav-selected')
    this.refs.restaurantsMenu.classList.add('hide')
    this.refs.restaurantsMenu.classList.remove('reveal')
  }

  toggleActivityMenu() {
    this.refs.activitiesButton.classList.toggle('nav-not-selected')
    this.refs.activitiesButton.classList.toggle('nav-selected')
    this.refs.activitiesMenu.classList.toggle('hide')
    this.refs.activitiesMenu.classList.toggle('reveal')
  }

  hideActivityMenu() {
    this.refs.activitiesButton.classList.add('nav-not-selected')
    this.refs.activitiesButton.classList.remove('nav-selected')
    this.refs.activitiesMenu.classList.add('hide')
    this.refs.activitiesMenu.classList.remove('reveal')
  }

  render() {

    return (
      <div>

        {/*NAV BAR*/}
        <div className='row center-text' id='navbar'>

          {/*HOTELS*/}
          <div className='col-sm-4 col-xs-12 center-text no-padding'>
            <button
              className='nav-button nav-not-selected'
              ref='hotelsButton'
              onClick={this.hotelButtonClick}
            >
              HOTELS
            </button>
            <ul className='subnav-menu hide no-padding' ref='hotelsMenu'>
              {this.props.hotels.map(hotel => {
                return (
                  <li
                    key={hotel.name}
                    value={hotel.name}
                    type='hotelListItem'
                  >
                    {hotel.name}
                  </li>
                )
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
                return (
                  <li
                    key={restaurant.name}
                    value={restaurant.name}
                    type='restaurantListItem'
                  >
                    {restaurant.name}
                  </li>
                )
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
                return (
                  <li
                    key={activity.name}
                    value={activity.name}
                    type='activitiesListItem'
                  >
                    {activity.name}
                  </li>)
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