import React, { Component } from 'react'
import PlantContext from '../PlantContext';
import config from '../config'
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MyPlantsPage extends Component {
  static contextType = PlantContext;

  state = {
    myPlants: this.context.myPlants
  }
  //do component did mount here
  componentDidMount () {
    fetch(`${config.API_ENDPOINT}/users/1/plants`)
      .then( userPlantsRes => {
        if(!userPlantsRes.ok) {
          return userPlantsRes.json()
          .then(e => Promise.reject(e))
        }
        return userPlantsRes.json()
      })
      .then(myPlants => {
        this.setState({myPlants}) //??????
        console.log(myPlants)
      })
      .catch(error => {
        console.error({error}) // eslint-disable-line
      })
  }

renderPlants = () => {
  const myPlants = this.state.myPlants
  return myPlants.map((plant) => {
    return (
      <div className='MyPlantItem'>
        <h2>{plant.plant_name}</h2>
        <p>{plant.plant_type}</p>
        <p>{plant.toxicity}</p>
        <p>{plant.care_details}</p>

        <div className="DeletePlant">
              <button 
                type='button'
                onClick={() => this.deleteFromMyList()}
                className="DeletePlant__button"
              >
                <FontAwesomeIcon 
                  icon={faMinus}
                /> <br/>
                Remove from my list
              </button>
            </div>
      </div>
    )
  })
}

  render () {

    return (
      <div>
        <h1>My Plants</h1>
          {this.renderPlants()}
      </div>
    )
  }
}

export default MyPlantsPage;