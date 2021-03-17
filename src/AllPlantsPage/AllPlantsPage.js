import React, { Component } from "react";
import PlantList from "../PlantList/PlantList";
import SearchFilter from "../SearchFilter/SearchFilter";
import config from "../config";
class AllPlantsPage extends Component {

  state = {
    searchTerm: "",
    filterOption: "All",
    filterOptionTox: "all",
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
    const data = this.state.filteredData.filter((file) =>
      file.name.toLowerCase().includes(term.toLowerCase())
    );
    console.log(data, "search term");
    this.setState({
      filteredData: data,
      searchTerm: term,
    });
  }

  updateFilterOption(option) {
    this.setState({
      filteredData: this.state.filteredData
    }, () => {
      const data = option === 'All'
        ? this.state.filteredData
        : this.state.filteredData
          .filter(file => file.plant_type.toLowerCase().includes(option.toLowerCase()))
      this.setState({
        filteredData: data,
        filterOption: option,
      })
    })
  }

  updateFilterOptionTox(tox) {
    this.setState({
      filteredData: this.state.filteredData
    }, () => {
      const data = tox === 'all'
        ? this.state.filteredData
        : this.state.filteredData
          .filter(file => file.toxicity.toLowerCase().includes(tox.toLowerCase()))
      this.setState({
        filteredData: data,
        filterOptionTox: tox
      })
    })

  }

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