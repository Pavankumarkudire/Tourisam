import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useAuth } from "./Authentication";
import "../css/Style.css"
import "../css/Login.css"
import "../css/Register.css";
import "../css/Footer.css";
import "../css/Navbar.css";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tours" className="nav-link">
                  Tours
                </Link>
              </li>

              {isLoggedIn ? (
                <>
                  {userData && (
                    <li>
                      <p className="DummyUser">{userData.username}</p>
                    </li>
                  )}

                  <li>
                    <button className="LogoutButton" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/register"
                      className="nav-link bg-warning rounded-pill"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
