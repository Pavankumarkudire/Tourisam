import React from "react";
import Logo from "../assects/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer-Session">
      <div className="Footer">
        <div className="FooterImage">
          <img src={Logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            qui.
          </p>
        </div>
        <div className="DiscoverPage">
          <h5>Discover</h5>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/tours">Tours</Link></p>
        </div>
        <div>
          <h5>Quick Links</h5>
          <p><Link to="">Galary</Link></p>
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/register">Register</Link></p>
        </div>
        <div className="ContactPage">
          <h5>Contact</h5>
          <div className="ContactPageDetail">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#de601b" }}
            ></i>
            <span>Address:</span>
            <p> maruthalli,banglore</p>
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
