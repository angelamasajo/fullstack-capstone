import React, { Component } from 'react';
// import './PlantList.css'; //add css
import PlantListItem from '../PlantListItem/PlantListItem';

class PlantList extends Component {
  render () {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files
      .filter(file => file.name.includes(searchTerm)
        && (filterOption === 'All' || file.plantType === filterOption))
      .map((file, key) => <PlantListItem {...file} key={key} />)
    console.log(searchTerm)
    return (
      <div className="PlantList">
        <fieldset>
          <legend>Results</legend>
          {list}
        </fieldset>
      </div>
    )
  }
}

PlantList.defaultProps = {
  files: []
};

export default PlantList;