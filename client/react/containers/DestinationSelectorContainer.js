'use strict'

import React from 'react'
import store from '../../redux/store'
import axios from 'axios'

import DestinationSelector from '../components/DestinationSelector.js'
import setDestination from '../../redux/actions/setDestination'
import setBackgroundImage from '../../redux/actions/setBackgroundImage'
import setHotels from '../../redux/actions/setHotels'
import setRestaurants from '../../redux/actions/setRestaurants'
import setActivities from '../../redux/actions/setActivities'
import updateUser from '../../redux/actions/updateUser'

class DestinationSelectorContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      prompt: null,
      currentSelections: []
    }

    this.totalCheckedBoxes = 0
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateDestination = this.updateDestination.bind(this)
    this.updateCheckbox = this.updateCheckbox.bind(this)
    this.updatePrompt = this.updatePrompt.bind(this)
  }

  componentWillReceiveProps(nextProps) {

    // Run code the *first* time user is added to state, if user has activities
    if (!this.props.user && nextProps.user && nextProps.user.activities) {
      // Pull all the activities off the first index of user.activities 2x2 array
      const newSelections = nextProps.user.activities
          .map((activityArray) => activityArray[0])
      this.setState({ currentSelections: newSelections })
      this.totalCheckedBoxes = newSelections.length
    }
  }

  updateDestination(event) {

    if (event.target.name === 'city') {
      const destinationName = event.target.value
      store.dispatch(setDestination(destinationName))
      store.dispatch(setBackgroundImage(destinationName))
      store.dispatch(setHotels(destinationName))
      store.dispatch(setRestaurants(destinationName))
      store.dispatch(setActivities(destinationName))
      this.updatePrompt(destinationName)
    }
  }

  handleSubmit(event) {

    event.preventDefault()
    let updatedUser = this.props.user
    updatedUser.activities = this.state.currentSelections.map(selectionId => {
      return [selectionId, 0]
    })
    updatedUser.destinations = [[this.props.currentDestination.id, 1]] // Value is array of arrays [ [id, daynumber], ]
    store.dispatch(updateUser(updatedUser))
  }

  updateCheckbox(event) {

    let intervalId = null;
    const checkbox = event.target
    let newSelections = []
    const selectionId = parseInt(event.target.id)

    if (this.state.currentSelections.indexOf(selectionId) === -1) {
      this.totalCheckedBoxes++
      event.target.style.backgroundColor = "cornflowerblue"
      newSelections = this.state.currentSelections.slice()
      newSelections.push(selectionId)
      this.setState({currentSelections: newSelections})
    } else {
      this.totalCheckedBoxes--
      event.target.style.backgroundColor = "lightgray"
      newSelections = this.state.currentSelections.filter((id) => {
        return id !== selectionId
      })
      this.setState({currentSelections: newSelections})
    }
    this.updatePrompt()
  }

  updatePrompt(destinationName) {

    if (this.totalCheckedBoxes === 0) {
      this.setState({ prompt: `What Do You Want to Do in ${destinationName}?` })
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
    if (this.totalCheckedBoxes >= 1) {
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
        destinations={this.props.destinations}
        selection={this.props.currentDestination}
        activities={this.props.activities}
        prompt={this.state.prompt}
        currentSelections={this.state.currentSelections}
      />
    )
  }
}

export default DestinationSelectorContainer