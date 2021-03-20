import React, { Component } from "react";
import config from "../config";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MyPlantsPage.css";

class MyPlantsPage extends Component {
  state = {
    myPlants: [],
  };

  componentDidMount() {
    this.fetchPlants();
  }

  fetchPlants = () => {
    fetch(`${config.API_ENDPOINT}/users/1/plants`)
      .then((userPlantsRes) => {
        if (!userPlantsRes.ok) {
          return userPlantsRes.json().then((e) => Promise.reject(e));
        }
        return userPlantsRes.json();
      })
      .then((myPlants) => {
        this.setState({ myPlants });
      })
      .catch((error) => {
        console.error({ error }); // eslint-disable-line
      });
  };

  deleteFromMyList = (e, plant_id) => {
    fetch(`${config.API_ENDPOINT}/users/1/plants/${plant_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      this.fetchPlants();
      this.handleDeleteFromMyList();
      alert("Plant deleted.");
    });
  };

  handleDeleteFromMyList = (userPlant) => {
    this.setState({
      myPlants: this.state.myPlants.filter(
        (plant) => plant.plant_id !== userPlant
      ),
    });
  };

  renderPlants = () => {
    const myPlants = this.state.myPlants;
    return myPlants.map((plant, i) => {
      return (
        <div key={i} className="MyPlantItem">
          <h2>{plant.plant_name}</h2>
          <p>{plant.plant_type}</p>
          <p>{plant.toxicity}</p>
          <p>{plant.care_details}</p>

          <div className="DeletePlant">
            <button
              type="button"
              onClick={(e) => this.deleteFromMyList(e, plant.plant_id)}
              className="DeletePlant__button"
            >
              <FontAwesomeIcon icon={faMinus} /> <br />
              Remove from my list
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>My Plants</h1>
        {this.renderPlants()}
      </div>
    );
  }
}

export default MyPlantsPage;
