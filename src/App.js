import React, { Component } from 'react';
// import './App.css';
import SearchFilter from './SearchFilter/SearchFilter';
import PlantList from './PlantList/PlantList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchFilter/>
        <PlantList files={this.props.files}/>
      </div>
    );
  }
}

export default App;
