'use strict'

import React from 'react'

import DestinationSelectorContainer from './DestinationSelectorContainer'
import store from '../../redux/store'
import setUser from '../../redux/actions/setUser'
import loadDestinations from '../../redux/actions/loadDesetinations'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
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
      <DestinationSelectorContainer {...this.state} />
    )
  }
}

export default Home