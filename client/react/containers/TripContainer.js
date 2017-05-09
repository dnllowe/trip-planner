'use strict'

import React from 'react'
import store from '../../redux/store'
import Trip from '../components/Trip'

class TripContainer extends React.Component {

  constructor() {
    super()
    this.state = store.getState()
  }

  expandHotels() {

  }

  render() {
    return (
      <Trip {...this.state}
        expandHotels={this.expandHotels}/>
    )
  }
}

export default TripContainer