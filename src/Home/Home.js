import React, { Component } from "react";
import './Home.css'

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <header>
            <h1>PLANTVENTORY</h1>
          </header>
          <h2 className='HomeAbout'>About</h2>
          <p className='HomeDescription'>
            Take care of your plants with ease. Plantventory allows users to
            browse through available plants with care details to help plant
            owners find proper care for plants.
          </p>
          <p className='HomeDescription'>
            By adding plants to the user list, the user can easily keep tabs on
            their plants to determine the best care for them.
          </p>
          <button className='HomePageButton'onClick={() => this.props.history.push('/all-plants')}>
            BEGIN
          </button>
        </div>
    );
  }
}

export default Home;
