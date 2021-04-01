import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header>
          <h1>MOODLY</h1>
        </header>
        <main className="HomeDiv">
          <h2 className="HomeAbout">About</h2>
          <p className="HomeDescription">
          Moodly is a mood tracker, where the user can track their moods regularly 
          and make a journal entry based on their mood. Users can then look back at 
          their journal entries by filtering which journal entries they want to see 
          by mood speficied to help them navigate any strong emotions, regardless of 
          whether they are positive or negative. 
          </p>
          <p className="HomeDescription">
          The goal of this app is for users 
          to improve and understand their overall mental health and wellbeing.
          </p>
          <p className="HomeDescription">
            *** NOTE: This application is in DEMO MODE and no login is required
            at this time. ***
          </p>
          <button
            className="HomePageButton"
            onClick={() => this.props.history.push("/all-entries")}
          >
            BEGIN AS DEMO USER
          </button>
        </main>
      </div>
    );
  }
}

export default Home;
