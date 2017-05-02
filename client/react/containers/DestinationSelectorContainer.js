'use strict'

import React from 'react'
import DestinationSelector from '../components/DestinationSelector.js'

class DestinationSelectorContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      destinationSelection: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateDestination = this.updateDestination.bind(this)
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
      />
    )
  }
}

export default DestinationSelectorContainer