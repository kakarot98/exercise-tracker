import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">ExerciseTracker</Link>
      <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                  <Link to="/" className="nav-link">Exercises</Link>
              </li>
              <li className="navbar-item">
                  <Link to="/" className="nav-link">Create exercise Log</Link>
              </li>
              <li className="navbar-item">
                  <Link to="/" className="nav-link">Create user</Link>
              </li>
          </ul>
      </div>
  </nav>)
};

export default NavBar;
