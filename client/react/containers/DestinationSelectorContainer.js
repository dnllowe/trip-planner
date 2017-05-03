'use strict'

import React from 'react'
import store from '../../redux/store'
import axios from 'axios'

import DestinationSelector from '../components/DestinationSelector.js'
import loadDestinations from '../../redux/actions/loadDesetinations'
import setDestination from '../../redux/actions/setDestination'
import setBackgroundImage from '../../redux/actions/setBackgroundImage'

class DestinationSelectorContainer extends React.Component {

  constructor() {
    super()
    this.state = store.getState()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateDestination = this.updateDestination.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
    store.dispatch(loadDestinations())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  updateDestination(event) {
    store.dispatch(setDestination(event.target.value))
    store.dispatch(setBackgroundImage(event.target.value))
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <DestinationSelector
        handleSubmit={this.handleSubmit}
        updateDestination={this.updateDestination}
        destinations={this.state.destinations}
        selection={this.state.currentDestination}
      />
    )
  }
}

export default DestinationSelectorContainer