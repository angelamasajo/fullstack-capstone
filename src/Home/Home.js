import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {

  routeToHome = () => {
      this.props.history.push('/all-plants')
    }
  render() {

    return (
      <div className="Home">
        <header>
          <h1>PLANTVENTORY</h1>
        </header>
        <h2>
          About
        </h2>
        <p>
          Take care of your plants with ease. 
          Plantventory allows users to browse through available plants with care details to help plant owners
          find proper care for plants. By adding plants to the user list, the user can easily keep tabs on their 
          plants to determine the best care for them.
        </p>
        <button>
        <Link to ="/all-plants">
            BEGIN
          </Link>
        </button>
      </div>

    )
  }
}

export default Home;