import React, { Component } from 'react';
// import './PlantList.css'; //add css
import PlantListItem from './PlantListItem/PlantListItem';

class PlantList extends Component {
  render () {
    const list = this.props.files
      .map((file, key) => <PlantListItem {...file} key={key} />)
    return (
      <div className="PlantList">
        {list}
      </div>
    )
  }
}

PlantList.defaultProps = {
  files: []
};

export default PlantList;