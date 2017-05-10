'use strict'

import React from 'react'

class Trip extends React.Component {

  constructor() {

    super()

    this.state = {
      isHotelOn: false,
      isRestaurantOn: false,
      isActivityOn: false,
      imageUrl: null,
      content: null
    }

    this.hotelButtonClick = this.hotelButtonClick.bind(this)
    this.toggleHotelMenu = this.toggleHotelMenu.bind(this)
    this.hideHotelMenu = this.hideHotelMenu.bind(this)
    this.hotelMouseOver = this.hotelMouseOver.bind(this)

    this.restaurantButtonClick = this.restaurantButtonClick.bind(this)
    this.toggleRestaurantMenu = this.toggleRestaurantMenu.bind(this)
    this.hideRestaurantMenu = this.hideRestaurantMenu.bind(this)
    this.restaurantMouseOver = this.restaurantMouseOver.bind(this)

    this.activityButtonClick = this.activityButtonClick.bind(this)
    this.toggleActivityMenu = this.toggleActivityMenu.bind(this)
    this.hideActivityMenu = this.hideActivityMenu.bind(this)
    this.activityMouseOver = this.activityMouseOver.bind(this)

    this.getRandomImage = this.getRandomImage.bind(this)
    this.getRandomContent = this.getRandomContent.bind(this)

    this.turnOffContent = this.turnOffContent.bind(this)
    this.turnOffImage = this.turnOffImage.bind(this)
    this.turnOffExtras = this.turnOffExtras.bind(this)
  }

  hotelButtonClick() {

    this.toggleHotelMenu()
    this.hideRestaurantMenu()
    this.hideActivityMenu()
    this.turnOffExtras()
  }

  hotelMouseOver() {

    this.setState({
      content: this.getRandomContent('hotel'),
      imageUrl: this.getRandomImage(),
      isHotelOn: true,
      isRestaurantOn: false,
      isActivityOn: false
    })
  }

  restaurantButtonClick() {

    this.toggleRestaurantMenu()
    this.hideHotelMenu()
    this.hideActivityMenu()
    this.turnOffExtras()
  }

  restaurantMouseOver() {

    this.setState({
      content: this.getRandomContent('restaurant'),
      imageUrl: this.getRandomImage(),
      isRestaurantOn: true,
      isHotelOn: false,
      isActivityOn: false
    })
  }

  activityButtonClick() {

    this.toggleActivityMenu()
    this.hideHotelMenu()
    this.hideRestaurantMenu()
    this.turnOffExtras()
  }

  activityMouseOver() {

    this.setState({
      content: this.getRandomContent('attraction'),
      imageUrl: this.getRandomImage(),
      isActivityOn: true,
      isRestaurantOn: false,
      isHotelOn: false
    })
  }

  turnOffContent() {
    this.setState({content: null})
  }

  turnOffImage() {
    this.setState({imageUrl: null})
  }

  turnOffExtras() {
    this.setState({
      isHotelOn: false,
      isRestaurantOn: false,
      isActivityOn: false
    })

    this.turnOffContent()
    this.turnOffImage()
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

  getRandomImage() {
    let index = Math.floor(Math.random() * 9) + 1;
    return `/images/random/${index}.jpg`;
  }

  getRandomContent(noun) {

    let randomContent = [
        `"This is probably the best ${noun} ever. I mean, seriously. Have you *seen* this ${noun}???"`,
        `"It's a pretty ok ${noun}."`,
        `"People from all over the world come to this ${noun}. So why don't you?"`,
        `"There are ${noun}s, and there are *${noun}s*. This is the latter."`,
        `"5 stars. 10 stars. 100 stars. You can't put a rating on how great this ${noun} is."`,
        `"... to be honest. It's kinda 'meh'."`,
        `"One of the best ${noun}s in all of New York City!"`,
        `"Words can't describe how awesome this ${noun} is!"`,
        `"We're running out of fake reviews to write..."`,
        `"l;kasdgjgei adgladg g;lk aoidagig elekgj alge" --The New York Times`,
        `"This is randomized, so if something positive shows up over something like... a memorial, cut us some slack, ok?"`,
        `"A must-see ${noun} for anyone visiting New York."`,
        `"Don't leave New York without visitng this ${noun}."`,
        `"A+"`
    ]

    let index = Math.floor(Math.random() * randomContent.length)
    return randomContent[index]
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
                    onMouseOver={this.hotelMouseOver}
                  >
                    {hotel.name}
                  </li>
                )
              })}
            </ul>

            {/*CONTENT FOR RESTAURANT CONTENT ON MENU ROLLOVER*/}
            {this.state.isRestaurantOn &&
              <div className='hidden-xs center-text no-padding text-1-5em margin-top-100px'>
                {this.state.content}
              </div>
            }

            {/*CONTENT FOR ACTIVITIES CONTENT ON MENU ROLLOVER*/}
            {this.state.isActivityOn &&
              <div className='hidden-xs center-text no-padding text-1-5em margin-top-100px'>
                {this.state.content}
              </div>
            }
          </div>


          {/*RESTAURANTS*/}
          <div className='col-sm-4 col-xs-12 center-text no-padding'>
            <button
              className='nav-button nav-not-selected'
              ref='restaurantsButton'
              onClick={this.restaurantButtonClick}
            >
              RESTAURANTS
            </button>

            <ul className='subnav-menu hide no-padding' ref='restaurantsMenu'>
              {this.props.restaurants.map(restaurant => {
                return (
                  <li
                    key={restaurant.name}
                    value={restaurant.name}
                    onMouseOver={this.restaurantMouseOver}
                  >
                    {restaurant.name}
                  </li>
                )
              })}
            </ul>

            {/*IMAGE FOR HOTELS CONTENT ON MENU ROLLOVER*/}
            {this.state.isHotelOn &&
              <img
                className='subnav-image hidden-xs no-padding margin-top-100px'
                src={this.state.imageUrl}
              />
            }

            {/*IMAGE FOR ACTIVITIES CONTENT ON MENU ROLLOVER*/}
            {this.state.isActivityOn &&
              <img
                className='subnav-image hidden-xs no-padding margin-top-100px'
                src={this.state.imageUrl}
              />
            }
          </div>


          {/*ACTIVITIES*/}
          <div className='col-sm-4 col-xs-12 center-text no-padding'>
            <button
              className='nav-button nav-not-selected'
              ref='activitiesButton'
              onClick={this.activityButtonClick}
            >
              THINGS TO DO
            </button>
            <ul className='subnav-menu hide no-padding' ref='activitiesMenu'>
              {this.props.activities.map(activity => {
                return (
                  <li
                    key={activity.name}
                    value={activity.name}
                    onMouseOver={this.activityMouseOver}
                  >
                    {activity.name}
                  </li>)
              })}
            </ul>

            {/*CONTENT FOR HOTEL CONTENT ON MENU ROLLOVER*/}
            {this.state.isHotelOn &&
              <div className='hidden-xs center-text no-padding text-1-5em margin-top-100px'>
                {this.state.content}
              </div>
            }

            {/*IMAGE FOR RESTAURANTS CONTENT ON MENU ROLLOVER*/}
            {this.state.isRestaurantOn &&
              <img
                className='subnav-image hidden-xs no-padding margin-top-100px'
                src={this.state.imageUrl}
              />
            }
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