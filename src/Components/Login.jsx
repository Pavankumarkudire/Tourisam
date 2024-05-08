import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import LoginImg from "../assects/images/login.png";
import LoginImg1 from "../assects/images/user.png";
import Footer from "./Footer";
import { fakeAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("myData");
    if (savedData) {
        
    }
  }, []);
  const handleLogin = () => {
    if (email && Password) {
      fakeAuth.authenticate();
      navigation("/");
    } else {
      alert("please enter the email and password.");
    }
  };
  const navigation = useNavigate();
  return (
    <div>
      <Navbar isLoggedIn={false} />
      <div className="LoginPage">
        <div className="LoginImage">
          <img src={LoginImg} alt="" />
        </div>
        <div className="LoginForm">
          <img src={LoginImg1} alt="" />
          <h4 className="LoginHeader">Login</h4>
          <form>
            <input type="text" id="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" id="UserPassword" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
          </form>
          <button onClick={handleLogin}>Login</button>
          <p >Don't have an account?  <span style={{color:"black"}}>Register</span></p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
