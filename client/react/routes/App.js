'use strict'

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'
import store from '../../redux/store'

class App extends React.Component {

  constructor() {
    super()
    this.state = store.getState()
    this.state.bgStyle = {backgroundImage: store.getState().bgImage}
    this.fadeInBackground = this.fadeInBackground.bind(this)
    this.bgOpacity = null
    this.bgStyle = null
    this.isFadingIn = false
  }

  componentDidMount() {

    // Wait until background image has changed before calling fadeInBackground
    this.unsubscribe = store.subscribe(() => {
      if (this.state.bgStyle.backgroundImage === store.getState().bgImage) {
      } else {
        this.fadeInBackground()
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  fadeInBackground() {

    if (!this.isFadingIn) {
      // Slowly fade new prompt in
      this.bgOpacity = 0.15
      this.setState({
        bgStyle:
          Object.assign({},
            { backgroundImage: store.getState().bgImage },
            { opacity: this.bgOpacity.toString() })
      })

      clearInterval(this.intervalId)

      this.intervalId = setInterval(() => {
        this.bgOpacity += 0.01
          this.setState({
            bgStyle:
              Object.assign({},
                { backgroundImage: store.getState().bgImage },
                { opacity: this.bgOpacity.toString() })
          })
          if (this.bgOpacity >= 1) {
            this.isFadingIn = false
            clearInterval(this.intervalId);
          }
      }, 0.05)
      this.isFadingIn = true
    }
  }

  render() {

    return (
      <main>
        <div className='bg-image' style={this.state.bgStyle}>
          <Switch>

            {/*LANDING PAGE ROUTE*/}
            <Route path='/' component={Home} />

          </Switch>
        </div>
      </main>
    )
  }
}

export default App