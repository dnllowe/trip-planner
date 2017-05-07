'use strict'

import React from 'react'
import store from '../../redux/store'
import axios from 'axios'

import DestinationSelector from '../components/DestinationSelector.js'
import loadDestinations from '../../redux/actions/loadDesetinations'
import setDestination from '../../redux/actions/setDestination'
import setBackgroundImage from '../../redux/actions/setBackgroundImage'
import setHotels from '../../redux/actions/setHotels'
import setRestaurants from '../../redux/actions/setRestaurants'
import setActivities from '../../redux/actions/setActivities'
import updateUser from '../../redux/actions/updateUser'

class DestinationSelectorContainer extends React.Component {

  constructor() {
    super()
    this.state = store.getState()
    this.totalCheckedBoxes = 0
    this.state.prompt = null
    this.state.activitySelections = []
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateDestination = this.updateDestination.bind(this)
    this.updateCheckbox = this.updateCheckbox.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {

      // Keep track of properties that aren't on store state
      const newState = store.getState()
      newState.prompt = this.state.prompt
      newState.activitySelections = this.state.activitySelections
      this.setState(newState)
    })

    store.dispatch(loadDestinations())
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  updateDestination(event) {
    if (event.target.name === 'city') {
      const destinationName = event.target.value
      store.dispatch(setDestination(destinationName))
      store.dispatch(setBackgroundImage(destinationName))
      store.dispatch(setHotels(destinationName))
      store.dispatch(setRestaurants(destinationName))
      store.dispatch(setActivities(destinationName))
      this.setState({ prompt: `What Do You Want to Do in ${destinationName}?` })
      // axios.put(`/api/destination/${destinationName}`, {isSelected: true})
    }

    if (event.target.name === 'activity') {
      const activityName = event.target.value
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let updatedUser = store.getState().user
    updatedUser.activities = this.state.activitySelections
    store.dispatch(updateUser(updatedUser))
  }

  updateCheckbox(event) {

    let intervalId = null;
    const checkbox = event.target
    let newSelections = []

    if (this.state.activitySelections.indexOf(event.target.id) === -1) {
      this.totalCheckedBoxes++
      event.target.style.backgroundColor = "cornflowerblue"
      newSelections = this.state.activitySelections.slice()
      newSelections.push([event.target.id, 1])
      this.setState({activitySelections: newSelections})
    } else {
      this.totalCheckedBoxes--
      event.target.style.backgroundColor = "lightgray"
      newSelections = this.state.activitySelections.filter((element) => {
        return element[1] !== activity.id
      })
      this.setState({activitySelections: newSelections})
    }

    if (this.totalCheckedBoxes === 0) {
      this.setState({ prompt: `What Do You Want to Do in ${store.getState().currentDestination.name}?` })
      // whatToDo.style = "opacity: 0.1";

      // clearInterval(intervalId);
      // intervalId = setInterval(() => {
      //     let currentOpacity = parseFloat(whatToDo.style.opacity);
      //     currentOpacity += 0.01;
      //     whatToDo.style.opacity = currentOpacity.toString();

      //     if(whatToDo.style.opacity >= 1) {
      //         clearInterval(intervalId);
      //     }
      // }, 1);
    }

    // Only true when all checkboxes were empty, and this is first to get selected
    if (this.totalCheckedBoxes === 1 && checkbox.checked) {
      this.setState({ prompt: "Anything Else?" })
      // whatToDo.style = "opacity: 0.1";

      // clearInterval(intervalId);
      // intervalId = setInterval(() => {
      //     let currentOpacity = parseFloat(whatToDo.style.opacity);
      //     currentOpacity += 0.01;
      //     whatToDo.style.opacity = currentOpacity.toString();

      //     if(whatToDo.style.opacity >= 1) {
      //         clearInterval(intervalId);
      //     }
      // }, 1);
    }
  }

  render() {
    return (
      <DestinationSelector
        handleSubmit={this.handleSubmit}
        updateDestination={this.updateDestination}
        updateCheckbox={this.updateCheckbox}
        destinations={this.state.destinations}
        selection={this.state.currentDestination}
        activities={this.state.activities}
        prompt={this.state.prompt}
      />
    )
  }
}

export default DestinationSelectorContainer