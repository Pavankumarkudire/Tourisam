import React, { useState } from "react";
import Navbar from "./Navbar";
import LoginImg from "../images/login.png";
import LoginImg1 from "../images/user.png";
import Footer from "./Footer";
import { Link, json, useNavigate } from "react-router-dom";
import { useAuth } from "./Authentication";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await fetch(
         ` https://tour-booking-tu7f.onrender.com/api/v1/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("login Sucussful:", data);
          alert("login sucussful");
          localStorage.setItem("userData", JSON.stringify(data));
          navigate("/")
          login()
          
        }else{
            const errorData = await response.json()
            alert(`Login failed: ${errorData.message}`);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <div>
      <Navbar isLoggedIn={!false} />
      <div className="LoginPage">
        <div className="LoginImage">
          <img src={LoginImg} alt="Login" />
        </div>
        <div className="LoginForm">
          <img src={LoginImg1} alt="User" />
          <h4 className="LoginHeader">Login</h4>
          <form onSubmit={(e) => e.preventDefault()}>
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
            <Link
              to="/register"
              style={{ color: "black", textDecoration: "none" }}
            >
              <span>Register</span>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
