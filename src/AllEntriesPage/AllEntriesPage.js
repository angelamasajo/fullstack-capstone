import React, { Component } from "react";
import EntryList from "../EntryList/EntryList";
import SearchFilter from "../SearchFilter/SearchFilter";
import config from "../config";

class AllEntriesPage extends Component {
  state = {
    searchTerm: "",
    filterOption: "All",
    // filterOptionTox: "all",
    // plantType: "all",
    mood: "all",
    // plantToxicity: "all",
    // plantData: [],
    entryData: [],
    filteredData: [],
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/entries`)
      .then((entries) => {
        if (!entries.ok) {
          return entries.json().then((e) => Promise.reject(e));
        }
        return entries.json();
      })
      .then((entryData) => {
        this.setState({ entryData, filteredData: entryData });
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
        this.filterEntries();
      }
    );
  }

  updateFilterOption(option) {
    this.setState(
      {
        mood: option.toLowerCase(),
        filterOption: option,
      },
      () => {
        this.filterEntries();
      }
    );
  }

  // updateFilterOptionTox(tox) {
  //   this.setState(
  //     {
  //       plantToxicity: tox.toLowerCase(),
  //       filterOptionTox: tox,
  //     },
  //     () => {
  //       this.filterPlants();
  //     }
  //   );
  // }

  filterEntries = () => {
    const { mood, entryData, searchTerm } = this.state;
    const filter = entryData.filter((entry) => {
      return (
        (entry["mood"].toLowerCase() === mood ||
          mood === "all") 
          &&
        // (entry["toxicity"].toLowerCase() === plantToxicity ||
        //   plantToxicity === "all") &&
        entry["name"].toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    this.setState({ filteredData: filter });
  };

  render() {
    return (
      <div className="AllEntriesPage">
        <SearchFilter
          searchTerm={this.state.searchTerm}
          handleUpdate={(term) => this.updateSearchTerm(term)}
          filterOption={this.state.filterOption}
          handleFilterChange={(option) => this.updateFilterOption(option)}
          // filterOptionTox={this.state.filterOptionTox}
          // handleFilterToxChange={(tox) => this.updateFilterOptionTox(tox)}
        />

        <EntryList
          allEntries={this.state.filteredData}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          // filterOptionTox={this.state.filterOptionTox}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default AllEntriesPage;
