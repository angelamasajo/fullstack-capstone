import React, { Component } from 'react';
// import './ListItem.css'; //add css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PlantContext from '../PlantContext'
import config from '../config'

class PlantListItem extends Component {
  static contextType = PlantContext;

  state = {
    plant_id: this.props.id,
    user_id: 1
  }
  

  handleAddToMyList = (e) => {
    e.preventDefault()

    const postBody = {
      plant_id: this.props.id,
      user_id: this.state.user_id,
    }
    console.log(this.state.plant_id)

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
        console.log(data)
        this.props.history.push('/my-plants')
      })
  }


  render () {
    const { id, name, plant_type, toxicity, care_details} = this.props; // eslint-disable-line
    // console.log(this.props, 'check')
    console.log(this.props.id, 'plant id check')
    return (
      <div className="PlantListItem">
        <form onSubmit={this.handleAddToMyList}>
          <label value={this.props.id} className="PlantListItem__plantName" >
            <h2>{name}</h2>
            <p>{plant_type}</p>
            <p>{toxicity}</p>
            <p>{care_details}</p>
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