import React, { Component } from 'react'
import PlantContext from '../PlantContext';

class MyPlantsPage extends Component {
  static contextType = PlantContext;

renderPlants = () => {
  const {myPlants} = this.context
  return myPlants.map(plant => {
    return (
      <>
        <h1>{plant.name}</h1>
        <p>{plant.careDetails}</p>
        <p>{plant.plantType}</p>
        <p>{plant.toxicity}</p>
      </>
    )
  })
}

  render () {

    return (
      <div>
          {this.renderPlants()}
      </div>
    )
  }
}

export default MyPlantsPage;