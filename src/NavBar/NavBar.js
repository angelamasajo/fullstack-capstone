import React, { Component } from 'react';
// import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <div className="NavBar">
          <Link to ="/all-plants">
            ALL PLANTS
          </Link>
          MY PLANTS
          SIGN OUT
      </div>
    )
  }
}

export default NavBar;