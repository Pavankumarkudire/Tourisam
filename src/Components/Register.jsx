import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import RegisterImg from "../images/register.png";
import RegisterImg1 from "../images/user.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (email && password && username) {
      const userData = { username, email, password };

      try {
        const response = await fetch(
          `https://tour-booking-tu7f.onrender.com/api/v1/auth/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Registration failed:", errorData);
          alert(`Registration failed: ${errorData.message || "Please try again."}`);
        } else {
          const data = await response.json();
          console.log("Registration successful:", data);
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/login");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please enter username, email, and password.");
    }
  };

  return (
    <div>
      <Navbar isLoggedIn= {true}/>
      <div className="RegisterPage">
        <div className="RegisterImage">
          <img src={RegisterImg} alt="Register" />
        </div>
        <div className="RegisterForm">
          <img src={RegisterImg1} alt="User" />
          <h4 className="RegisterHeader">Register</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              id="UserName"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
          <button onClick={handleRegister}>Create Account</button>
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "black", textDecoration: "none" }}
            >
              <span>Login</span>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
