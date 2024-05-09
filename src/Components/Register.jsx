import React, {useState } from "react";
import Navbar from "./Navbar";
import RegisterImg from "../assects/images/register.png";
import RegisterImg1 from "../assects/images/user.png";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleRegistor = () => {
    if(email && password && username){
        const userData ={username,email,password};
        localStorage.setItem("userData", JSON.stringify(userData));
        navigation('/login');
    }
    else{
        alert("please enter uaername,email and password.");
    }
  };
  
  return (
    <div>
      <Navbar isLoggedIn={false} />
      <div className="RegisterPage">
        <div className="RegisterImage">
          <img src={RegisterImg} alt="" />
        </div>
        <div className="RegisterForm">
          <img src={RegisterImg1} alt="" />
          <h4 className="RegisterHeader">Register</h4>
          <form action="">
            <input
              type="text"
              id="UserName"
              placeholder="user Name"
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
          <button onClick={handleRegistor}>Create Account</button>
          <p>
            Don't have an account? <span style={{ color: "black" }}>Login</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
