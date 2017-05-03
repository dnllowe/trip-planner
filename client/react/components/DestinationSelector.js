'use strict'

import React from 'react'

const DestinationSelector = (props) => {

  return (
    <div>
      <form id='tripDetails' onSubmit={props.handleSubmit} onChange={props.updateDestination}>
        <div className='row'>
          <div id='lightbox-landing-page' className='col-sm-6 col-sm-offset-3 col-xs-12 lightbox center-text'>
            <div id='cities'>
              <h1 id='intro' className='bold-text white-text'>Where Are You Going?</h1>
              <select id='citySelection' name='citySelection'>
                <option value="default">Don't know, yet...</option>

                {/*MAP OVER DESTINATIONS TO GET OPTION VALUES FOR FORM*/}
                {props.destinations &&
                  props.destinations.map(destination => {
                  return (
                    <option
                      value={destination.name}
                      key={destination.name}>
                      {destination.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <br />
            <br />
            {props.selection &&
              <div id='activities' name='activities'>
                <h3 className='bold-text white-text' id='whatToDo'>
                  What Do You Want to Do in {props.selection.name}?
                </h3>
                <ul className='activity-list'>
                  {/*ADD REACT JSX FOR ACTIVITY LIST*/}
                </ul>
              </div>
            }
          </div>
          <div className='col-sm-3'></div>
        </div>
        <div className='row'>
          {props.selection &&
            <div className='col-xs-12 center-text'>
              <button id='submit-landing-page' value='Plan My Trip!'>Plan My Trip!</button>
            </div>
          }
        </div>
      </form>
    </div>
  )
}

export default DestinationSelector