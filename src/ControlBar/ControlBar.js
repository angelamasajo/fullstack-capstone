import React, { Component } from 'react';
// import './ControlBar.css'; //add css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class ControlBar extends Component {
  state = {
    MyPlantList: []
  }

  handleAddToMyList = (plant) => {
    console.log(plant)
  }

  render () {

    return (
      <div className="ControlBar">
        <div className="ControlBar__button">
          <FontAwesomeIcon 
            icon={faPlus}
            onSubmit={this.handleAddToMyList}
          />
        </div>
      </div>
    )
  }
}

export default ControlBar;