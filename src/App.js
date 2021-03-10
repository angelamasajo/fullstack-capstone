import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import LoginPage from './LoginPage/LoginPage';
import AllPlantsPage from './AllPlantsPage/AllPlantsPage';
import MyPlantsPage from './MyPlantsPage/MyPlantsPage';
import AddPlant from './AddPlant/AddPlant';
import PlantContext from './PlantContext';
import FILES from './dummy-store';
import config from './config'

class App extends Component {
  state = {
    plantData: FILES,
    myPlantData: [],
    plants: []
  }

  componentDidMount () {
    // Promise.all([
      fetch(`${config.API_ENDPOINT}/plants`)
      // fetch(`${config.API_ENPOINT}/users`)
    // ])
      .then(([plantsRes]) => {
        if (!plantsRes.ok) { 
          return plantsRes.json()
          // .then(e => Promise.reject(e)) 
        }

        console.log(plantsRes.json())
        // return [plantsRes.json()]
      })
      .then(([plants]) => {
        this.setState({plants})
      })
      .catch(error => {
        console.error({error}) // eslint-disable-line
      })
  }

  fetchPlants = () => {
    fetch(`${config.API_ENDPOINT}/plants`)
      .then(data => {
        if (!data.ok) {
          throw new Error ('Something went wrong.')
        }
        console.log(data, 'angela')
        return data.json()
      })
      .then(data => {
        this.setState({plants:data})
      })
  }

  addPlant = () => {
    this.fetchPlants()
  }

  // addPlant = (plant) => {
  //   this.setState({
  //     plantData: [...this.state.plantData, plant]
  //   })
  // }

  addToMyPlants = (plant) => {
    console.log(plant)
    this.setState({
      myPlantData: [...this.state.myPlantData, plant]
    })
  }

  render() {
    const value = {
      plantData: this.state.plantData,
      addPlant: this.addPlant,
      addToMyPlants: this.addToMyPlants,
      myPlants: this.state.myPlantData
    }

    return (
      <PlantContext.Provider value={value}>
        <div className="App">
          <nav>
            <NavBar />
          </nav>
          <main>
            <Route 
              exact
              path='/'
              component={LoginPage}
            />
            <Route
              path='/all-plants'
              component={AllPlantsPage}
            />
            <Route 
              path='/add-plant'
              component={AddPlant}
            />
            <Route
              path='/my-plants'
              component={MyPlantsPage}
            />
          </main>
          <footer>
            FOOTER HERE
          </footer>
        </div>
      </PlantContext.Provider>
    );
  }
}

export default App;
