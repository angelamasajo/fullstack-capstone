import React, { Component } from 'react'
import PlantContext from '../PlantContext';

class MyPlantsPage extends Component {
  static contextType = PlantContext;

renderPlants = () => {
  const {myPlants} = this.context
  return myPlants.map(plant => {
    return (
      <>
        <h2>{plant.name}</h2>
        <p>{plant.plantType}</p>
        <p>{plant.toxicity}</p>
        <p>{plant.careDetails}</p>

      </>
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