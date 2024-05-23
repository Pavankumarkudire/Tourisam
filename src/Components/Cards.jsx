import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  

  const getData = async () => {
      const response = await fetch(
        "https://tour-booking-tu7f.onrender.com/api/v1/tours",
        {
          method: "GET",
          headers: {
            "app-id": "65264833377b2d988a461078",
          },
        }
      );
      const responseData = await response.json();
      setData(responseData.data);
      console.log(responseData.data);
    }
    

  return (
    <>
      <p className="ms-5 ps-3 bg-warning rounded-pill" style={{ width: "7%" }}>
        Explore
      </p>
      <h5 className="ms-5">Our featured tours</h5>
      <div className="container">
        <div className="row">
          {data.length > 0 ? (
            data.map((tour) => (
            
                <div className="card col-md-4 mb-4">
                  <Link
                    to={`/product/${tour._id}`}
                    style={{ textDecoration: "none", color: "#000000" }}
                  >
                    <img
                      className="card-img-top"
                      src={tour.photo}
                      alt={tour.title}
                    />
                    <div className="card-body">
                      <div className="card-review">
                        <div>
                          <i
                            className="fa-solid fa-location-dot"
                            style={{ color: "#de601b" }}
                          ></i>
                          <span className="card-text">{tour.city}</span>
                        </div>
                        <div>
                          <i
                            className="fa-regular fa-star"
                            style={{ color: "#faa935" }}
                          ></i>
                          <span className="card-text">
                            {tour.reviews.length > 0
                              ? (
                                  tour.reviews.reduce(
                                    (sum, review) => sum + review.rating,
                                    0
                                  ) / tour.reviews.length
                                ).toFixed(0)
                              : "No ratings"}
                            ({tour.reviews.length}){" "}
                          </span>
                        </div>
                      </div>
                      <h5 className="card-title">{tour.title}</h5>
                      <div className="card-Price-Book">
                        <p className="card-text">
                          ${tour.price} / <span>per Person</span>
                        </p>

                        <button className="card-button">Book now</button>
                      </div>
                    </div>
                    {/* <div className="card-footer">
                      <small className="text-muted">
                        Last updated:{" "}
                        {new Date(tour.updatedAt).toLocaleDateString()}
                      </small>
                    </div> */}
                  </Link>
                </div>
            
            ))
          ) : (
            <p>Loading...!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
