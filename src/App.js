import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import AllPlantsPage from './AllPlantsPage/AllPlantsPage';
import MyPlantsPage from './MyPlantsPage/MyPlantsPage';
import AddPlant from './AddPlant/AddPlant';
// import PlantContext from './PlantContext';
// import config from './config'


class App extends Component {

  render() {
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
                component={Home}
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
            created by angela masajo
          </footer>
        </div>
    );
  }
}

export default App;
