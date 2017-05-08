'use strict'

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import store from '../../redux/store'

class App extends React.Component {

  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  render() {
    return (
      <main>
        <div className='bg-image' style={{ backgroundImage: this.state.bgImage }}>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </div>
      </main>
    )
  }
}

export default App