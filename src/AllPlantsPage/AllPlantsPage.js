import React, { Component } from 'react'
import PlantList from '../PlantList/PlantList'
import SearchFilter from '../SearchFilter/SearchFilter'
import PlantContext from '../PlantContext'

class AllPlantsPage extends Component {
  static contextType = PlantContext
  
  state = {
    searchTerm: '',
    filterOption: 'All',
    filterOptionTox: 'all',
    allPlants: [],
  }

  componentDidMount() {
    this.setState({allPlants: this.context.plantData})
    console.log(this.context.plantData)

  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.allPlants !== this.state.allPlants) {
  //     this.setState({allPlants: this.context.plantData})
  //   }
  // }
  
  updateSearchTerm(term) {
    const data = this.context.plantData
      .filter(file => file.name.toLowerCase().includes(term.toLowerCase()))
      console.log(data, 'search term')
    this.setState({
      allPlants: data,
      searchTerm: term
    })
  }

  //fix filter on the back end
  updateFilterOption(option) {
    console.log(option)
    const data = option === 'All' 
      ? this.context.plantData 
      : this.context.plantData
        .filter(file => file.plant_type.toLowerCase().includes(option.toLowerCase()))
    this.setState({
      allPlants: data,
      filterOption: option
    })
  }

  updateFilterOptionTox(tox) {
    console.log(tox)
    const data = tox === 'all' 
      ? this.context.plantData 
      : this.context.plantData
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
          handleUpdate={term => this.updateSearchTerm(term)}
          filterOption={this.state.filterOption}
          handleFilterChange={option => this.updateFilterOption(option)}
          filterOptionTox={this.state.filterOptionTox}
          handleFilterToxChange={tox => this.updateFilterOptionTox(tox)}
        />
        <PlantList 
          allPlants={this.context.plantData}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          filterOptionTox={this.state.filterOptionTox}
          history={this.props.history}
        />
      </div>
    )
  }
}


export default AllPlantsPage;