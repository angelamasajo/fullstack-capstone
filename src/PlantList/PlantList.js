import React, { Component } from 'react';
import PlantListItem from '../PlantListItem/PlantListItem';
// import './PlantList.css'; //add css
// import PlantListItem from '../PlantListItem/PlantListItem';

class PlantList extends Component {
  render () {
    const { allPlants } = this.props;
    const list = allPlants.map((file, key) => <PlantListItem {...file} key={key} />)
    // const list = this.props.files
    //   .filter(file => file.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     && (filterOption === 'All' || file.plantType === filterOption)
    //     && (filterOptionTox === 'All' || file.toxicity === filterOptionTox))
    //   .map((file, key) => <PlantListItem {...file} key={key} />)
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