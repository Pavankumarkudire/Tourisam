import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Tours from "./Components/Tours";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { AuthProvider} from "./Components/Authentication";
import Logout from "./Components/Logout";

const Router = () => {
  return (
    <div>
        
    <AuthProvider>
      <BrowserRouter>
          {/* <navbar isLoggedIn={fakeAuth.isAuthenticated} /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Logout" element={<Logout />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
};

export default Router;
