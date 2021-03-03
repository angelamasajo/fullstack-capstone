import React, { Component } from 'react';
// import './ListItem.css'; //add css
// import ControlBar from '../ControlBar/ControlBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PlantContext from '../PlantContext'

class PlantListItem extends Component {
  static contextType = PlantContext;


  handleAddToMyList = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  render () {
    return (
      <div className="PlantListItem">
        <form onSubmit={this.handleAddToMyList}>
          <label className="PlantListItem__plantName">
            <h2>{this.props.name}</h2>
            <p>{this.props.careDetails}</p>
          </label>

            <div className="ControlBar">
              <button 
                type='submit'
                className="ControlBar__button"
              >
                <FontAwesomeIcon 
                  icon={faPlus}
                /> <br/>
                Add to my list
              </button>
            </div>
          
        </form>
      </div>
    )
  }
}

export default PlantListItem;