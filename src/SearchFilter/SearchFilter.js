import React, { Component } from 'react';
// import './SearchFilter.css' //add the css file
import SearchBox from '../SearchBox/SearchBox' 
import FilterOptions from '../FilterOptions/FilterOptions'

class SearchFilter extends Component {
  render () {
    return (
      <div className="SearchFilter">
        <div className="SearchFilter__heading">
          <h1>Plants List</h1>
        </div>
        <div className="SearchFilter__controls">
          <SearchBox />
          <FilterOptions />
        </div>
      </div>
    )
  }
}

export default SearchFilter;