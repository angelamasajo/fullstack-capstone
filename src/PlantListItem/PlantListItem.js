import React, { Component } from 'react';
// import './ListItem.css'; //add css
// import ControlBar from '../ControlBar/ControlBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PlantContext from '../PlantContext'

class PlantListItem extends Component {
  static contextType = PlantContext;


  handleAddToMyList = () => {
    const { name, care_details, plant_type, toxicity } = this.props;
    // console.log(this.props)
    this.context.addToMyPlants({name, care_details, plant_type, toxicity})
    // console.log(this.context.myPlants)
    // this.props.history.push('/my-plants')

  }

  render () {
    const { name, plant_type, toxicity, care_details} = this.props;
    return (
      <div className="PlantListItem">

          <label className="PlantListItem__plantName">
            <h2>{name}</h2>
            <p>{plant_type}</p>
            <p>{toxicity}</p>
            <p>{care_details}</p>
          </label>

            <div className="ControlBar">
              <button 
                type='button'
                onClick={() => this.handleAddToMyList()}
                className="ControlBar__button"
              >
                <FontAwesomeIcon 
                  icon={faPlus}
                /> <br/>
                Add to my list
              </button>
            </div>
          
      </div>
    )
  }
}

export default PlantListItem;