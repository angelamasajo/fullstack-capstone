import React, { Component } from 'react';
// import './ListItem.css'; //add css
// import ControlBar from '../ControlBar/ControlBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PlantContext from '../PlantContext'
import config from '../config'

class PlantListItem extends Component {
  static contextType = PlantContext;


  handleSubmit = (e) => {
    e.preventDefault()

    const postBody = {
      plant_id: this.state.plant_id,
      user_id: this.state.user_id,
    }

    fetch(`${config.API_ENDPOINT}/users/1/plants`, {
      method: 'POST',
      body: JSON.stringify(postBody),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => {
        if(!res.ok) {
          return res.json().then((error) => {
            throw error
          })
        }
        return res.json()
      })
      .then((data) => {
        this.context.addtoMyPlants(data)
        this.props.history.push('/my-plants')
      })
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name] : e.target.value
  //   })
  // }

  handleAddToMyList = () => {
    const { name, care_details, plant_type, toxicity } = this.props;
    console.log(this.props, 'list item')
    this.context.addToMyPlants({name, care_details, plant_type, toxicity})
    console.log(this.context.myPlants)
    // this.props.history.push('/my-plants')

  }

  render () {
    const { name, plant_type, toxicity, care_details} = this.props;
    return (
      <div className="PlantListItem">

          <label className="PlantListItem__plantName" >
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