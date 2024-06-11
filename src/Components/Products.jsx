import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { RiMapPinUserFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { RiMapPinTimeLine } from "react-icons/ri";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Booking from "./Booking";

const Products = () => {
  const [product, setProduct] = useState(null);
  //   const today = new Date();

  const { id } = useParams();
  console.log(id);
  

  const getData = async () => {
    const response = await fetch(
      `https://tour-booking-tu7f.onrender.com/api/v1/tours/${id}`
    );
    const res = await response.json();
    setProduct(res.data);
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, [id]);

  

  return (
    <>
      <Navbar />
      {product ? (
        <div className="container">
          <div className="row">
            <div className="col-md-8" style={{ marginRight: "20px" }}>
              <div className="">
                <img
                  src={product.photo}
                  alt={product.title}
                  style={{ width: "100%", height: "70vh" }}
                />
              </div>
              <div className="BookingInfo border">
                <h5>
                  {product.title}, {product.city}
                </h5>
                <div className="card-Address">
                  <p>
                    <i
                      className="fa-regular fa-star"
                      style={{ color: "#faa935" }}
                    ></i>
                    <span className="card-text">
                      {product.reviews.length > 0
                        ? (
                            product.reviews.reduce(
                              (sum, review) => sum + review.rating,
                              0
                            ) / product.reviews.length
                          ).toFixed(0)
                        : "No ratings"}
                      ({product.reviews.length}){" "}
                    </span>
                  </p>
                  <div className="address">
                    <RiMapPinUserFill style={{ fontSize: "20px" }} />
                    {product.address}
                  </div>
                </div>
                <div className="Address-Location">
                  <p>
                    <IoLocationOutline style={{ fontSize: "20px" }} />
                    {product.city}
                  </p>
                  <p>
                    <LuCircleDollarSign style={{ fontSize: "20px" }} />
                    {product.price} per person
                  </p>
                  <p>
                    <RiMapPinTimeLine style={{ fontSize: "20px" }} />
                    {product.distance} k/m
                  </p>
                  <p>
                    <i className="fa-solid fa-user-group"></i>
                    {product.maxGroupSize} people
                  </p>
                </div>
                <h4>Description</h4>
                <textarea
                  name=""
                  className="DescriptionAddress"
                  placeholder="this is the description"
                ></textarea>
              </div>
              <Reviews product={product} />
            </div>
            <div className=" singlePageRight col-md-3 border">
              <p className="border PriceOfPerson">
                {product.price} / Per Person{" "}
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#faa935" }}
                ></i>
                <span className="card-text">
                  {product.reviews.length > 0
                    ? (
                        product.reviews.reduce(
                          (sum, review) => sum + review.rating,
                          0
                        ) / product.reviews.length
                      ).toFixed(0)
                    : "No ratings"}
                  ({product.reviews.length}){" "}
                </span>
              </p>
              <h5>Information</h5>
              <div className="border Information">
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Phone number" />
                <div className="DataInformation">
                  <input type="date" name="" id="" />
                  <input type="number" placeholder="Number of people" />
                </div>
              </div>
              <Booking product={product} />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....!</p>
      )}
      <Footer />
    </>
  );
};

export default Products;
