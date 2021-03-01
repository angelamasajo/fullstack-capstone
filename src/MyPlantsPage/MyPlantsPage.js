import React, { Component } from 'react'
import SearchFilter from '../SearchFilter/SearchFilter'

class MyPlantsPage extends Component {
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
  
  render () {
    return (
      <div>
        <SearchFilter
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}
        />
      </div>
    )
  }
}

export default MyPlantsPage;