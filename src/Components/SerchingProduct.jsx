import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import  Mark from "../images/tick-circle.svg"
const SerchingProduct = () => {
  const location = useLocation();
  const { tours } = location.state || { tours: [] };
  const navigator = useNavigate();

  const homeHandle = () => {
    navigator("/")
  }

  return (
    <>
      <div className="search-results mt-4">
        {tours.length === 0 ? (
          <>
          <img className="Mark" src={Mark} alt="" />
          <p className="SerchResultPage">Sorry</p>
          <p className="SerchResultPage">No trip Found</p>
          <button className="SearchResultButton" onClick={homeHandle}>Back To Home</button>
          </>
        ) : (
          <div className="card-container">
            {tours.map((tour) => (
              <div className="card" key={tour._id}>
                <Link
                  to={`/product/${tour._id}`}
                  style={{ textDecoration: "none", color: "#000000" }}
                >
                  <img src={tour.photo} alt={tour.title} />
                  <div className="pagination-body p-2">
                    <div className="pagination-review">
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ color: "#de601b" }}
                      ></i>
                      <span>{tour.city}</span>
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
                            ).toFixed(1)
                          : "No ratings"}
                        ({tour.reviews.length}){" "}
                      </span>
                    </div>
                  </div>
                  <div className="p-2">
                    <h5>{tour.title}</h5>
                    <div className="CardPrice">
                      <p>
                        <span style={{ color: "#de601b" }}>
                          ${tour.price}
                        </span>
                        /per Person
                      </p>
                      <button className="Button">Book Now</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SerchingProduct;
