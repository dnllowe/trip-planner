'use strict'

import React from 'react'

import DestinationSelectorContainer from './DestinationSelectorContainer'
import store from '../../redux/store'
import setUser from '../../redux/actions/setUser'
import loadDestinations from '../../redux/actions/loadDesetinations'

class Home extends React.Component {

  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    console.log('Home mounted')
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
    store.dispatch(setUser())
    store.dispatch(loadDestinations())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div className='bg-image' style={{ backgroundImage: this.state.bgImage }}>
        <DestinationSelectorContainer {...this.state }/>
      </div>
    )
  }
}

export default Home