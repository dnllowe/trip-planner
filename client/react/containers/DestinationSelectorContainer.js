'use strict'

import React from 'react'
import store from '../../redux/store'
import DestinationSelector from '../components/DestinationSelector.js'
import loadDestinations from '../../redux/actions/loadDesetinations'

class DestinationSelectorContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      destinationSelection: null
    }

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

  updateDestination(destination) {
    this.setState({ destinationSelect: destination })
  }

  handleSubmit(event) {
    console.log("SUBMISSION")
    event.preventDefault()
  }

  render() {
    return (
      <DestinationSelector
        handleSubmit={this.handleSubmit}
        updateDestination={this.updateDestination}
        destinations={this.state.destinations}
      />
    )
  }
}

export default DestinationSelectorContainer