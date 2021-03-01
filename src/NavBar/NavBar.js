import React, { Component } from 'react';
// import './NavBar.css' //add the css file


class NavBar extends Component {
  render () {
    return (
      <div className="NavBar">
        <nav>
        <ul>
          <li>ALL PLANTS</li>
          <li>MY PLANTS</li>
          <li>SIGN OUT</li>
        </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;