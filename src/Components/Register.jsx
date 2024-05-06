import React from "react";
import Navbar from "./Navbar";
import RegisterImg from "../assects/images/register.png";
import RegisterImg1 from "../assects/images/user.png";
import Footer from "./Footer";


const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="RegisterPage">
        <div className="RegisterImage">
          <img src={RegisterImg} alt="" />
        </div>
        <div className="RegisterForm">
            <img src={RegisterImg1} alt="" />
          <h4 className="RegisterHeader">Register</h4>
          <form action="">
            <input type="text" id="UserName" placeholder="user Name" />
          <input type="text" id="Email" placeholder="Email"/>
          <input type="text" id="UserPassword" placeholder="Password"/>
          </form>
          <button>Create Account</button>
          <p>Don't have an account? <span style={{color:"black"}}>Login</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
