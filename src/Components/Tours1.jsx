import React from 'react'
import Navbar from './Navbar'
import SerchingProduct from './SerchingProduct'
import Subscribe from './Subscribe'
import Footer from './Footer'
import TourImg from "../images/tour.jpg";


const Tours1 = () => {
  return (
    <div>
      <Navbar />
      <div className="ToursPage">
        <img src={TourImg} alt="" />
        <h2>All Tours</h2>
      </div>
      <SerchingProduct />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Tours1
