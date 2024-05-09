import React, { useState } from "react";
import Navbar from "./Navbar";
import LoginImg from "../assects/images/login.png";
import LoginImg1 from "../assects/images/user.png";
import Footer from "./Footer";
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";

const AuthenticatedUser = (email, password) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData && userData.email === email && userData.password === password) {
    return true;
  } else {
    alert("please enter the  email and password");
  }
};

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      const isAuthenticated = AuthenticatedUser(email, password);
      if (isAuthenticated) {
        navigation("/");
        login();
      } else {
        alert("Invalid  email or password.Please try again.");
      }
    } else {
      alert("please enter the email and password.");
    }
  };

  return (
    <div>
      <Navbar isLoggedIn={!false} />
      <div className="LoginPage">
        <div className="LoginImage">
          <img src={LoginImg} alt="" />
        </div>
        <div className="LoginForm">
          <img src={LoginImg1} alt="" />
          <h4 className="LoginHeader">Login</h4>
          <form>
            <input
              type="email"
              id="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="UserPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{" "}
            <span style={{ color: "black" }}>Register</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
