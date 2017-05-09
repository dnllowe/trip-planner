'use strict'

import React from 'react'

const Trip = (props) => {
  return (
    <div>
      // NAV BAR
      <div className='row center-text' id='navbar'>

        {/*HOTELS*/}
        <div className='col-sm-4 col-xs-12 center-text no-padding'>
          <button className='nav-button nav-not-selected' id='hotelsButton'>HOTELS</button>
          <ul className='subnav-menu hide no-padding' id='hotelsMenu'>
            {props.hotels.map(hotel => {
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
          <button className='nav-button nav-not-selected' id='restaurantsButton'>RESTAURANTS</button>

          <ul className='subnav-menu hide no-padding' id='restaurantsMenu'>
            {props.restaurants.map(restaurant => {
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
          <button className='nav-button nav-not-selected' id='activitiesButton'>THINGS TO DO</button>
          <ul className='subnav-menu hide no-padding' id='activitiesMenu'>
            {props.activities.map(activity => {
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

export default Trip