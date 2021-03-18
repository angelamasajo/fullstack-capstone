import React, { Component } from "react";
import PlantList from "../PlantList/PlantList";
import SearchFilter from "../SearchFilter/SearchFilter";
import config from "../config";
class AllPlantsPage extends Component {

  state = {
    searchTerm: "",
    filterOption: "All",
    filterOptionTox: "all",
    plantType: "all",
    plantToxicity: "all",
    plantData: [],
    filteredData: []
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/plants`)
      .then((plantsRes) => {
        if (!plantsRes.ok) {
          return plantsRes.json().then((e) => Promise.reject(e));
        }
        return plantsRes.json();
      })
      .then((plantData) => {
        this.setState({ plantData, filteredData: plantData });
      })
      .catch((error) => {
        console.error({ error }); // eslint-disable-line
      });
  }

  updateSearchTerm(term) {
    this.setState(
      {
        searchTerm: term
      },
      () => {
        this.filterPlants()
      }
      )
    // const data = this.state.plantData.filter((file) =>
    //   file.name.toLowerCase().includes(term.toLowerCase())
    // );
    // console.log(data, "search term");
    // this.setState({
    //   filteredData: data,
    //   searchTerm: term,
    // });
  }

  updateFilterOption(option) {
    console.log(option, 'option')
    this.setState(
      {
        plantType: option.toLowerCase(),
        filterOption: option,
      },
      () => {
        this.filterPlants();
      }
    );

    // this.setState({
    //   filteredData: this.state.filteredData
    // }, () => {
    //   const data = option === 'All'
    //     ? this.state.plantData
    //     : this.state.plantData
    //       .filter(file => file.plant_type.toLowerCase().includes(option.toLowerCase()))
    //   this.setState({
    //     filteredData: data,
    //     filterOption: option,
    //   })
    // })
  }

  updateFilterOptionTox(tox) {
    this.setState(
      {
        plantToxicity: tox.toLowerCase(),
        filterOptionTox: tox,
      },
      () => {
        this.filterPlants();
      }
    );
    // this.setState({
    //   filteredData: this.state.filteredData
    // }, () => {
    //   const data = tox === 'all'
    //     ? this.state.plantData
    //     : this.state.plantData
    //       .filter(file => file.toxicity.toLowerCase().includes(tox.toLowerCase()))
    //   this.setState({
    //     filteredData: data,
    //     filterOptionTox: tox
    //   })
    // })

  }

  filterPlants = () => {
    const { plantType, plantToxicity, plantData, searchTerm } = this.state;
    // console.log(plantType, 'plant type?')
    console.log(plantData, 'data')
    const filter = plantData.filter((plant) => {
      // return plant['id'] === 4
      console.log(plant["name"].toLowerCase().includes(searchTerm.toLowerCase()))
      
      return (
        (plant["plant_type"].toLowerCase() === plantType || plantType === 'all')
        &&
        (plant["toxicity"].toLowerCase() === plantToxicity || plantToxicity === 'all')
        &&
        (plant["name"].toLowerCase().includes(searchTerm.toLowerCase()))  
      );

    });
    console.log(filter, "filter");
    this.setState({ filteredData: filter });
  };

  render() {
    return (
      <div className="AllPlantsPage">
        <SearchFilter
          searchTerm={this.state.searchTerm}
          handleUpdate={(term) => this.updateSearchTerm(term)}
          filterOption={this.state.filterOption}
          handleFilterChange={(option) => this.updateFilterOption(option)}
          filterOptionTox={this.state.filterOptionTox}
          handleFilterToxChange={(tox) => this.updateFilterOptionTox(tox)}
        />

        <PlantList
          allPlants={this.state.filteredData}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          filterOptionTox={this.state.filterOptionTox}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default AllPlantsPage;