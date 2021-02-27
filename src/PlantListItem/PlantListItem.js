import React, { Component } from 'react';
// import './ListItem.css'; //add css
import ControlBar from '../ControlBar/ControlBar';

class PlantListItem extends Component {
  render () {
    return (
      <div className="PlantListItem">
        <div className="PlantListItem__plantName">
          {this.props.name}
        </div>
        <div className="PlantListItem__actions">
          <ControlBar />
        </div>
      </div>
    )
  }
}

export default PlantListItem;