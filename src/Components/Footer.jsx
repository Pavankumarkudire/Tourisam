import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer-Session">
      <div className="Footer">
        <div className="FooterImage col-md-3">
          <img src={Logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            qui.
          </p>
          <div className="social-Media-Logos">
          <i className="fa-solid fa-user-gear"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="DiscoverPage col-md-3">
          <h5>Discover</h5>
          <p><Link to="/" className="Custome-Link">Home</Link></p>
          <p><Link to="/about" className="Custome-Link">About</Link></p>
          <p><Link to="/tours" className="Custome-Link">Tours</Link></p>
        </div>
        <div className="col-md-3">
          <h5>Quick Links</h5>
          <p><Link to="" className="Custome-Link">Galary</Link></p>
          <p><Link to="/login" className="Custome-Link">Login</Link></p>
          <p><Link to="/register" className="Custome-Link">Register</Link></p>
        </div>
        <div className="ContactPage col-md-3">
          <h5>Contact</h5>
          <div className="ContactPageDetail">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#de601b" }}
            ></i>
            <span>Address:</span>
            <p> maruthalli,benglore</p>
          </div>
          <div className="ContactPageDetail">
            <i class="fa-solid fa-envelope" style={{ color: "#de601b" }}></i>
            <span>Email:</span>
            <p>pavan@gmail.com</p>
          </div>
          <div className="ContactPageDetail">
            <i class="fa-solid fa-envelope" style={{ color: "#de601b" }}></i>
            <p>Phone:</p>
            <p>9434399389</p>
          </div>
        </div>
      </div>
      <div class="copywrite">
        <p>
          Copywrite-2024, Design and develop by PavanKumar.All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
