import React from "react";
import Navbar from "./Navbar";
import  Mark from "../images/tick-circle.svg"
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Subscribe from "./Subscribe";


const BookingCard = () => {
    const location = useLocation();
    const {product} = location.state || {product : []}
  return (
    <>
      <Navbar isLoggedIn={!true}/>
      {product  ? (
        <div className="ConfimedBooking">
          <p>Sorry</p>
          <p>Your trip is not Booking</p>
        </div>
      ) : (
        <div>
          <img className="Mark" src={Mark} alt="" />
            <p>Your booking is confirom</p>  
        </div>
      )}
      <Subscribe />
      <Footer />
    </>
  );
};

export default BookingCard;
