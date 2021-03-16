import React, { Component } from "react";
import PlantList from "../PlantList/PlantList";
import SearchFilter from "../SearchFilter/SearchFilter";
import PlantContext from "../PlantContext";
import config from "../config";
class AllPlantsPage extends Component {
  static contextType = PlantContext;

  state = {
    searchTerm: "",
    filterOption: "All",
    filterOptionTox: "all",
    plantType: "all",
    plantToxicity: "all",
    // allPlants: [],
    plantData: [],
    filteredData: []
  };

  // state = {
  //   plantData: [],
  // }

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
        console.log(plantData);
      })
      .catch((error) => {
        console.error({ error }); // eslint-disable-line
      });
  }

  fetchPlants = () => {
    fetch(`${config.API_ENDPOINT}/plants`)
      .then((data) => {
        if (!data.ok) {
          throw new Error("Something went wrong.");
        }
        return data.json();
      })
      .then((data) => {
        this.setState({ plantData: data });
        console.log(data, "plant data");
      });
  };

  updateSearchTerm(term) {
    const data = this.state.plantData.filter((file) =>
      file.name.toLowerCase().includes(term.toLowerCase())
    );
    console.log(data, "search term");
    this.setState({
      plantData: data,
      searchTerm: term,
      // console.log(allPlants)
    });
    // console.log(this.state.allPlants, 'all plants updated')
  }

  //fix filter on the back end
  updateFilterOption(option) {
    this.setState(
      {
        plantType: option.toLowerCase(),
        filterOption: option,
      },
      () => {
        this.filterPlants();
      }
    );

    // console.log(option)
    // const data = option === 'All'
    //   ? this.state.plantData
    //   : this.state.plantData
    //     .filter(file => file.plant_type.toLowerCase().includes(option.toLowerCase()))
    // console.log(data, 'data')
    // this.setState({
    //   plantData: data,
    //   filterOption: option,

    // })
  }

  updateFilterOptionTox(tox) {
    // console.log(tox)
    // const data = tox === 'all'
    //   ? this.state.plantData
    //   : this.state.plantData
    //     .filter(file => file.toxicity.toLowerCase().includes(tox.toLowerCase()))
    // this.setState({
    //   plantData: data,
    //   filterOptionTox: tox
    // })
  
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
    const { plantType, plantToxicity, plantData } = this.state;
    // console.log(plantType, 'plant type?')
    console.log(plantData, 'data')
    const filter = plantData.filter((plant) => {
      // return plant['id'] === 4

      return (
        plant["plant_type"].toLowerCase() === plantType &&
        plant["toxicity"].toLowerCase() === plantToxicity 

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
          // allPlants={this.context.plantData}
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
