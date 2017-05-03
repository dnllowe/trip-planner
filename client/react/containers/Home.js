'use strict'

import React from 'react'

import DestinationSelectorContainer from './DestinationSelectorContainer'
import store from '../../redux/store'

class Home extends React.Component {

  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div className='bg-image' style={{ backgroundImage: this.state.bgImage }}>
        <DestinationSelectorContainer />
      </div>
    )
  }
}

export default Home