import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { RiMapPinUserFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { RiMapPinTimeLine } from "react-icons/ri";
import Avatar from "../images/avatar.jpg";
import Footer from "./Footer";

const Products = () => {
  const [product, setProduct] = useState(null);
  const [review, setReview] = useState('');
  const userData = JSON.parse(localStorage.getItem("userData"));
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
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
                  style={{ width: "100%" }}
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
              <div className="Reviews border">
                <h5>Riviews ({product.reviews.length} reviews)</h5>
                <div>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#faa935" }}
                  ></i>{" "}
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#faa935" }}
                  ></i>{" "}
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#faa935" }}
                  ></i>{" "}
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#faa935" }}
                  ></i>
                  <i
                    className="fa-regular fa-star"
                    style={{ color: "#faa935" }}
                  ></i>
                </div>
                <div className="ProductSerchingPage">
                  <input type="text" placeholder="share your thoughts" />
                  <button>submit</button>
                </div>
                <div className="userReviews">
                  <div className="UserReview">
                    <div style={{ width: "12%" }}>
                      <img src={Avatar} alt="" style={{ width: "100%" }} />
                    </div>
                    <div>
                      <p>{userData.username}</p>
                      <p>{formattedDate}</p>
                      <input type="text" placeholder="Not so good place" value={review} onChange={(e)=> setReview(e.target.value)}/>
                    </div>
                  </div>
                  <div className="userRating">
                    {product.reviews.length}
                    <i
                      className="fa-regular fa-star"
                      style={{ color: "#faa935" }}
                    ></i>
                  </div>
                </div>
              </div>
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
              <div className=" Bookings ">
                <div className="Booking">
                  <p>
                    {product.price} <i className="fa-solid fa-xmark"></i>{" "}
                    {product.maxGroupSize} person
                  </p>
                  <p>{product.price * product.maxGroupSize}</p>
                </div>
                <div className="Booking">
                  <p>Service Charges</p>
                  <p>10</p>
                </div>
                <div className="Booking">
                  <p>Total</p>
                  <p>{product.price * product.maxGroupSize + 10}</p>
                </div>
                <button className="product-Booking">Book Now</button>
              </div>
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
