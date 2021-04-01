import React, { Component } from "react";
import "./EntryListItem.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import PlantContext from "../PlantContext";
// import config from "../config";

class PlantListItem extends Component {
  // static contextType = PlantContext;

  // state = {
  //   plant_id: this.props.id,
  //   user_id: 1,
  // };

  // handleAddToMyList = (e) => {
  //   e.preventDefault();

  //   const postBody = {
  //     plant_id: this.props.id,
  //     user_id: this.state.user_id,
  //   };

  //   fetch(`${config.API_ENDPOINT}/users/1/plants`, {
  //     method: "POST",
  //     body: JSON.stringify(postBody),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         return res.json().then((error) => {
  //           throw error;
  //         });
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       this.props.history.push("/my-plants");
  //     });
  // };

  render() {
    const { id, title, mood, description } = this.props; // eslint-disable-line
    return (
      <div className="EntryListItem">
        {/* <form onSubmit={this.handleAddToMyList}> */}
          <label value={this.props.id} className="PlantListItem__plantName">
            <h2>{title}</h2>
            <p>{mood}</p>
            <p>{description}</p>
          </label>
{/* 
          <div className="ControlBar">
            <button type="submit" className="ControlBar__button">
              <FontAwesomeIcon icon={faPlus} /> <br />
              Add to my list
            </button>
          </div> */}
        {/* </form> */}
      </div>
    );
  }
}

export default PlantListItem;
