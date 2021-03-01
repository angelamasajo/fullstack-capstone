import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import NavBar from './NavBar/NavBar';
import LoginPage from './LoginPage/LoginPage';
import AllPlantsPage from './AllPlantsPage/AllPlantsPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route 
          exact
          path='/login'
          component={LoginPage}
        />
        <AllPlantsPage
          files={this.props.files}
        />
      </div>
    );
  }
}

export default App;
