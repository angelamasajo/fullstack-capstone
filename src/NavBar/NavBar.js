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
              <NavLink activeClassName="current" to="/all-entries">
                ALL ENTRIES
              </NavLink>
            </li>
            {/* <li>
              <NavLink activeClassName="current" to="/my-plants">
                MY PLANTS
              </NavLink>
            </li> */}
            <li>
              <NavLink activeClassName="current" to="/add-entry">
                ADD ENTRY
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
