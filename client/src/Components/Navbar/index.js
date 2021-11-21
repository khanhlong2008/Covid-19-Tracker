/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
// import icon from "../../images/tieu-diet-corona.png";
// import { Link } from "react-router-dom";
import "../../App.css";
import {Nav , NavLink, Bars, NavMenu } from './NavbarEle'
export default class NavBar extends Component {
  render() {
    return (
     <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
          <h1 className="logo">COVID-19 TRACKER</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/news' activeStyle>
            News
          </NavLink>
          <NavLink to='/5k' activeStyle>
            5K
          </NavLink>
          {/* <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
     </>
      // <header className="header">
      //   <nav className="nav" id="nav-menu">
      //     <Link to="/">
      //       <div className="logo">COVID-19 TRACKER</div>
      //     </Link>
      //     <div className="nav__content bd-grid">
      //       {/* <ion-icon
      //         name="close-outline"
      //         className="nav__close"
      //         id="nav-close"
      //       ></ion-icon> */}

      //       <div className="nav__perfil">
      //         <div className="nav__img">
      //           <img src="assets/img/perfil.png" alt="" />
      //         </div>
      //       </div>

      //       <div className="nav__menu">
      //         <ul className="nav__list">
      //           <Link to="/">
      //             <li className="nav__item">
      //               <a className="nav__link ">
      //                 Home
      //               </a>
      //             </li>
      //           </Link>
      //           <Link to="/news">
      //             <li className="nav__item">
      //               <a  className="nav__link">
      //                 News
      //               </a>
      //             </li>
      //           </Link>
      //           <Link to="/5k">
      //             <li className="nav__item">
      //               <a  className="nav__link">
      //                 Message 5K
      //               </a>
      //             </li>
      //           </Link>
      //           {/* <li className="nav__item">
      //             <a href="#" className="nav__link">
      //               Portfolio
      //             </a>
      //           </li>
      //           <li className="nav__item">
      //             <a href="#" className="nav__link">
      //               Contact
      //             </a>
      //           </li> */}
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      // </header>
      
    );
  }
}