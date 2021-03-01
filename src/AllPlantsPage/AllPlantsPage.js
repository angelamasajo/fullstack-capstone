import React, { Component } from 'react'
import PlantList from '../PlantList/PlantList'
import SearchFilter from '../SearchFilter/SearchFilter'

class AllPlantsPage extends Component {
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
      <div className="AllPlantsPage">
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
    )
  }
}


export default AllPlantsPage;