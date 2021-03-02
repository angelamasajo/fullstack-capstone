import React, { Component } from 'react'
import PlantList from '../PlantList/PlantList'
import SearchFilter from '../SearchFilter/SearchFilter'
import FILES from '../dummy-store'

class AllPlantsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All',
      filterOptionTox: 'all',
      allPlants: FILES
    }
  }
  
  updateSearchTerm(term) {
    const data = this.state.allPlants
      .filter(file => file.name.toLowerCase().includes(term.toLowerCase()))
      console.log(data)
    this.setState({
      allPlants: data,
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    const data = this.state.allPlants
      .filter(file => file.plantType.toLowerCase().includes(option.toLowerCase()))
    this.setState({
      allPlants: data,
      filterOption: option
    })
  }

  updateFilterOptionTox(tox) {
    const data = this.state.allPlants
      .filter(file => file.toxicity.toLowerCase().includes(tox.toLowerCase()))
    this.setState({
      allPlants: data,
      filterOptionTox: tox
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
          filterOptionTox={this.state.filterOptionTox}
          handleFilterToxChange={tox => this.updateFilterOptionTox(tox)}
        />
        <PlantList 
          files={FILES}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          filterOptionTox={this.state.filterOptionTox}
          allPlants={this.state.allPlants}
        />
      </div>
    )
  }
}


export default AllPlantsPage;