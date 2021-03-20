import React, { Component } from "react";
import PlantListItem from "../PlantListItem/PlantListItem";
import "./PlantList.css"; //add css

class PlantList extends Component {
  render() {
    const { allPlants } = this.props;
    const list = allPlants.map((file, key) => (
      <PlantListItem
        {...file}
        key={key}
        id={file.id}
        history={this.props.history}
      />
    ));

    return (
      <div className="PlantList">
        <fieldset>
          <legend>Results</legend>
          {list}
        </fieldset>
      </div>
    );
  }
}

PlantList.defaultProps = {
  files: [],
};

export default PlantList;
