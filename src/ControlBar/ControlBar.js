import React, { Component } from 'react';
// import './ControlBar.css'; //add css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class ControlBar extends Component {
  render () {
    return (
      <div className="ControlBar">
        <div className="ControlBar__button">
          <FontAwesomeIcon icon={faPlus}/>
        </div>
      </div>
    )
  }
}

export default ControlBar;