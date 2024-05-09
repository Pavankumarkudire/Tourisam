import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useAuth } from './Authentication';
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth(); 
  const navigate = useNavigate();

 useEffect(()=>{
    handleLogout();
 },[])

  const handleLogout = () => {
    logout(); 
    navigate("/"); 
  };

  return (
    <div>
      <Navbar isLoggedIn={true} /> 
      {/* <div onLoad={handleLogout}></div> */}
    </div>
  );
};

export default Logout;
