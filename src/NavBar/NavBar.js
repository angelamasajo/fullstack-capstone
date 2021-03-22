import React, { Component } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="nav">
          <ul>
            <li className="current">
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/all-plants">ALL PLANTS</Link>
            </li>
            <li>
              <Link to="/my-plants">MY PLANTS</Link>
            </li>
            <li>
              <Link to="/add-plant">ADD PLANT</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
