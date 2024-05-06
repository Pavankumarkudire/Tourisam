import React from "react";
import Navbar from "./Navbar";
import LoginImg from "../assects/images/login.png";
import LoginImg1 from "../assects/images/user.png";
import Footer from "./Footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="LoginPage">
        <div className="LoginImage">
          <img src={LoginImg} alt="" />
        </div>
        <div className="LoginForm">
            <img src={LoginImg1} alt="" />
          <h4 className="LoginHeader">Login</h4>
          <form action="">
          <input type="text" id="Email" placeholder="Email"/>
          <input type="text" id="UserPassword" placeholder="Password"/>
          </form>
          <button>Login</button>
          <p>Don't have an account? <span style={{color:"black"}}>Register</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
