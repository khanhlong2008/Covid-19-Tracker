import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "../../images/virus-slash-solid.svg";
export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar  nav-bar navbar-position">
        <div className="navbar-header">
          <Link to="/">
            <h3>
              <img src={icon} className="App-logo" alt="logo" />
            </h3>
          </Link>
          <Link to="/" className="navbar-brand cursor">
            <h3>Home</h3>
          </Link>
          <Link to="/vaccine" className="navbar-brand cursor">
            <h3>Vaccine</h3>
          </Link>
          <Link to="/news" className="navbar-brand cursor">
            <h3>News</h3>
          </Link>
        </div>
      </nav>
    );
  }
}
