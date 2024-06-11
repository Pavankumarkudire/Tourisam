import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Tours from "./Components/Tours";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { AuthProvider} from "./Components/Authentication";
import Logout from "./Components/Logout";
import Products from "./Components/Products";
import Tours1 from "./Components/Tours1";
import BookingCard from "./Components/BookingCard";

const Router = () => {
  return (
    <div>
        
    <AuthProvider>
      <BrowserRouter>
          {/* <navbar isLoggedIn={fakeAuth.isAuthenticated} /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/Search" element={<Tours1/>}/>
            <Route path="/tours/Booking" element = {<BookingCard/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Logout" element={<Logout />}/>
            <Route path="/product/:id" element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
};

export default Router;
