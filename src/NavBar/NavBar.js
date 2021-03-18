import React, { Component } from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <div className="NavBar">
          <Link to='/'>
            HOME          
          </Link>
          <Link to ="/all-plants">
            ALL PLANTS
          </Link>
          <Link to='/my-plants'>
            MY PLANTS
          </Link>
          <Link to='/add-plant'>
            ADD PLANT
          </Link>
      </div>
    )
  }
}

export default NavBar;