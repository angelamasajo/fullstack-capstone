import React, { Component } from 'react'
import PlantList from '../PlantList/PlantList'
import SearchFilter from '../SearchFilter/SearchFilter'
import FILES from '../dummy-store'
import PlantContext from '../PlantContext'

class AllPlantsPage extends Component {
  static contextType = PlantContext
  
  state = {
    searchTerm: '',
    filterOption: 'All',
    filterOptionTox: 'all',
  }
  
  updateSearchTerm(term) {
    const data = this.context.plantData
      .filter(file => file.name.toLowerCase().includes(term.toLowerCase()))
      console.log(data)
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    const data = this.context.plantData
      .filter(file => file.plantType.toLowerCase().includes(option.toLowerCase()))
    this.setState({
      filterOption: option
    })
  }

  updateFilterOptionTox(tox) {
    const data = this.context.plantData
      .filter(file => file.toxicity.toLowerCase().includes(tox.toLowerCase()))
    this.setState({
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
          files={this.context.plantData}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          filterOptionTox={this.state.filterOptionTox}
        />
      </div>
    )
  }
}


export default AllPlantsPage;