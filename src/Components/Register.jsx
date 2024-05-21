import React, { useState } from "react";
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

    //   try {
    //     const response = await fetch(
    //       `https://tour-booking-tu7f.onrender.com/api/v1/auth/register`,
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(userData),
    //       }
    //     );
    //     console.log(response);


        // if (response.ok) {
          localStorage.setItem("userData", JSON.stringify(userData));
          navigate("/login");
        // } else {
        //   alert("Registration failed. Please try again.");
        // }
    //   } catch (error) {
    //     alert("An error occurred. Please try again.");
    //   }
      
    // } else {
    //   alert("Please enter username, email, and password.");
    // }
    
  };
}

  return (
    <div>
      <Navbar isLoggedIn={false} />
      <div className="RegisterPage">
        <div className="RegisterImage">
          <img src={RegisterImg} alt="Register" />
        </div>
        <div className="RegisterForm">
          <img src={RegisterImg1} alt="User" />
          <h4 className="RegisterHeader">Register</h4>
          <form>
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
            <span style={{ color: "black" }}>Login</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
