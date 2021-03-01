import React, { Component } from 'react';
// import './SearchBox.css' //make css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render () {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch}/>
        <input 
          placeholder="Search plant"
          value={this.props.searchTerm}
          onChange={e => this.props.handleUpdate(e.target.value)}
        />
      </div>
    )
  }
}

export default SearchBox;