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

class App extends Component {
  state = {
    plantData: []
  }

  componentDidMount () {
    this.setState({
      plantData: FILES
    })
  }

  addPlant = (plant) => {
    this.setState({
      plantData: [...this.state.plantData, plant]
    })
  }

  render() {
    const value = {
      plantData: this.state.plantData,
      addPlant: this.addPlant
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
