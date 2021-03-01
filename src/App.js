import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import './App.css';
import SearchFilter from './SearchFilter/SearchFilter';
import PlantList from './PlantList/PlantList';
import NavBar from './NavBar/NavBar';
import LoginPage from './LoginPage/LoginPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    }
  }
  
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route 
          exact
          path='/login'
          component={LoginPage}
        />
        <SearchFilter
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}
        />
        <PlantList 
          files={this.props.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}

export default App;
