import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header>
          <h1>PLANTVENTORY</h1>
        </header>
        <main className='HomeDiv'>
        <h2 className="HomeAbout">About</h2>
        <p className="HomeDescription">
          Take care of your plants with ease. Plantventory allows users to
          browse through available plants within the database, where they can
          find plant type, toxicity, and care details to help them find proper
          care for plants.
        </p>
        <p className="HomeDescription">
          By adding plants to the their own user list, users can easily sift
          through it to keep important plant details in one place.
        </p>
        <button
          className="HomePageButton"
          onClick={() => this.props.history.push("/all-plants")}
        >
          BEGIN
        </button>
        </main>
      </div>
    );
  }
}

export default Home;
