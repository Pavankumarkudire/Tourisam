import React from "react";
import Navbar from "./Navbar";
import TourImg from "../images/tour.jpg";
import "../css/Tours.css";
import Serching from "./Serching";
import Pagination from "./Pagination";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Tours = () => {
  return (
    <div>
      <Navbar />
      <div className="ToursPage">
        <img src={TourImg} alt="" />
        <h2>All Tours</h2>
      </div>
      <Serching />
      <Pagination />
      <Subscribe/>
      <Footer />
    </div>
  );
};

export default Tours;
