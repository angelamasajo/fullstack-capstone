import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>
          <ul className="nav">
            <li>
              <NavLink exact activeClassName="current" to="/">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/all-plants">
                ALL PLANTS
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/my-plants">
                MY PLANTS
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="current" to="/add-plant">
                ADD PLANT
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
