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
    filteredData: [],
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
        searchTerm: term,
      },
      () => {
        this.filterPlants();
      }
    );
  }

  updateFilterOption(option) {
    console.log(option, "option");
    this.setState(
      {
        plantType: option.toLowerCase(),
        filterOption: option,
      },
      () => {
        this.filterPlants();
      }
    );
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
  }

  filterPlants = () => {
    const { plantType, plantToxicity, plantData, searchTerm } = this.state;
    // console.log(plantType, 'plant type?')
    console.log(plantData, "data");
    const filter = plantData.filter((plant) => {
      // return plant['id'] === 4
      console.log(
        plant["name"].toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        (plant["plant_type"].toLowerCase() === plantType ||
          plantType === "all") &&
        (plant["toxicity"].toLowerCase() === plantToxicity ||
          plantToxicity === "all") &&
        plant["name"].toLowerCase().includes(searchTerm.toLowerCase())
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
