'use strict'

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import setUser from '../../redux/actions/setUser'
import store from '../../redux/store'

import Home from '../containers/Home'

class App extends React.Component {

  componentDidMount() {
    store.dispatch(setUser())
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </main>
    )
  }
}

export default App