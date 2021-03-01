import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <div className="NavBar">
          <Link to ="/all-plants">
            ALL PLANTS
          </Link>
          <Link to='/my-plants'>
            MY PLANTS
          </Link>
          <Link to='/add-plant'>
            ADD PLANT
          </Link>
          <Link to='/'>
            SIGN OUT
          </Link>

      </div>
    )
  }
}

export default NavBar;