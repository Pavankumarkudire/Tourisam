import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);

  const getData = async () => {
    const response = await fetch(
      `https://tour-booking-tu7f.onrender.com/api/v1/tours/${id}`
    );
    const res = await response.json();
    setProduct(res.data);
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
            <div className="col-md-9">
              <img
                src={product.photo}
                alt={product.title}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-3 border">
              <p className="border">
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
              <div className="border">
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Phone number" />
                <input type="date" name="" id="" />
              </div>
              <div className="border">
                <div className="Bookings">
                  <p>
                    {product.price} <i className="fa-solid fa-xmark"></i>{" "}
                    {product.maxGroupSize} person
                  </p>
                  <p>{product.price * product.maxGroupSize}</p>
                </div>
                <div className="Bookings">
                  <p>Service Charges</p>
                  <p>10</p>
                </div>
                <div className="Bookings">
                  <p>Total</p>
                  <p>{product.price * product.maxGroupSize + 10}</p>
                </div>
                <button className="product-Booking">Book Now</button>
              </div>
            </div>
            <div className="BookingInfo col-md-8">
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
                  <i className="fa-regular fa-location-smile"></i>
                  {product.address}
                </div>
              </div>
              <div className="Address-Location">
                <p>
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#de601b" }}
                  ></i>
                  {product.city}
                </p>
                <p>
                  <i className="fa-solid fa-square-dollar"></i>
                  {product.price} per person
                </p>
                <p>
                  <i className="fa-solid fa-location-plus"></i>
                  {product.distance} k/m
                </p>
                <p>
                  <i className="fa-solid fa-user-group"></i>
                  {product.maxGroupSize} people
                </p>
              </div>
              <h4>Description</h4>
              <input type="text" placeholder="this is the description" />
            </div>
            <div className="Reviews">
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
                <input type="text"  placeholder="share your thoughts"/>
                <button>submit</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....!</p>
      )}
    </>
  );
};

export default Products;
