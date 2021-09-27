/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import icon from "../../images/tieu-diet-corona.png";
import "./styles.css";
export default class Nav extends Component {
  render() {
    return (
      <nav>
        {/* <Link to="/">
          <h3>
            <img src={icon} className="App-logo" alt="logo" />
          </h3>
        </Link> */}
        <div class="logo">
          <img src={icon}  alt="logo" className="logo-virus" />
          COVID-19 TRACKER
        </div>

        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <Link to="/" className="navbar-brand cursor active">
            <li>
              <a href="#">Home</a>
            </li>
          </Link>
          <Link to="/vaccine" className="navbar-brand cursor active">
            <li>
              <a href="#">Vaccine</a>
            </li>
          </Link>
          <Link to="/news" className="navbar-brand cursor active">
            <li>
              <a href="#">News</a>
            </li>
          </Link>
        </ul>
      </nav>

      // <nav className="navbar  nav-bar navbar-position">
      //   <div className="navbar-header">

      //     <Link to="/" className="navbar-brand cursor">
      //       <h3>Home</h3>
      //     </Link>
      // <Link to="/vaccine" className="navbar-brand cursor">
      //   <h3>Vaccine</h3>
      // </Link>
      // <Link to="/news" className="navbar-brand cursor">
      //   <h3>News</h3>
      // </Link>
      //   </div>
      // </nav>
    );
  }
}
