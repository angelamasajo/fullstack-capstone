import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import LoginPage from './LoginPage/LoginPage';
import AllPlantsPage from './AllPlantsPage/AllPlantsPage';
import MyPlantsPage from './MyPlantsPage/MyPlantsPage';
import AddPlant from './AddPlant/AddPlant';

class App extends Component {

  render() {
    return (
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
    );
  }
}

export default App;
