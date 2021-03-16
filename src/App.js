import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import LoginPage from './LoginPage/LoginPage';
import AllPlantsPage from './AllPlantsPage/AllPlantsPage';
import MyPlantsPage from './MyPlantsPage/MyPlantsPage';
import AddPlant from './AddPlant/AddPlant';
import PlantContext from './PlantContext';
import config from './config'


class App extends Component {
  // state = {
  //   plantData: [],
  // }

  // componentDidMount () {
  //   fetch(`${config.API_ENDPOINT}/plants`)
  //     .then((plantsRes) => {
  //       if (!plantsRes.ok) { 
  //         return plantsRes.json()
  //         .then(e => Promise.reject(e)) 
  //       }
  //       return plantsRes.json()
  //     })
  //     .then((plantData) => {
  //       this.setState({plantData})
  //       console.log(plantData)
  //     })
  //     .catch(error => {
  //       console.error({error}) // eslint-disable-line
  //     })
  // }

  // fetchPlants = () => {
  //   fetch(`${config.API_ENDPOINT}/plants`)
  //     .then(data => {
  //       if (!data.ok) {
  //         throw new Error ('Something went wrong.')
  //       }
  //       return data.json()
  //     })
  //     .then(data => {
  //       this.setState({plantData:data})
  //       console.log(data, 'plant data')
  //     })
  // }

  // addPlant = () => {
  //   this.fetchPlants()
  // }


  render() {
    // const value = {
    //   plantData: this.state.plantData
    //   // addPlant: this.addPlant,
    // }

    return (
        <div className="App">
          <nav>
            <NavBar />
          </nav>
          <main>
            <Switch>
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
            </Switch>
          </main>
          <footer>
            FOOTER HERE
          </footer>
        </div>
    );
  }
}

export default App;
