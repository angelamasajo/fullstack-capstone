import React, { Component } from "react";
import "./SearchFilter.css";
import SearchBox from "../SearchBox/SearchBox";
import FilterOptions from "../FilterOptions/FilterOptions";

class SearchFilter extends Component {
  render() {
    return (
      <div className="SearchFilter">
        <div className="SearchFilter__heading">
          <h1>All Plants</h1>
        </div>
        <div className="SearchFilter__controls">
          <SearchBox
            searchTerm={this.props.searchTerm}
            handleUpdate={this.props.handleUpdate}
          />
          <FilterOptions
            filterOption={this.props.filterOption}
            handleFilterChange={this.props.handleFilterChange}
            filterOptionTox={this.props.filterOptionTox}
            handleFilterToxChange={this.props.handleFilterToxChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchFilter;
