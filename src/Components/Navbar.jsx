import React from "react";
import {Link} from "react-router-dom"
import logo from "../assects/images/logo.png"

const Navbar = () => {
    
  return (
    <div>
      <nav className=" navbar navbar-expand-lg ">
        <div className="container">
            <Link className="navbar-brand" ><img src={logo} alt="logo" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collaps navbar-collaps" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2" >
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tours" className="nav-link">Tours</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link ">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link bg-warning rounded-pill">Register</Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
