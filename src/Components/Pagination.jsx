import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pagination1() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const itemPerPage = 6;

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(
      `https://tour-booking-tu7f.onrender.com/api/v1/tours`,
      {
        method: "GET",
        headers: {
          "app-id": "65264833377b2d988a461078",
        },
      }
    );
    const res = await data.json();
    setData(res.data);
  };

  const handleClick = (page) => {
    setNum(page);
  };
  const startIndex = (num - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  return (
    <div>
      <div className="container  ">
        <div className="row">
          {data.slice(startIndex, endIndex).map((tour) => (
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
                          ).toFixed(1)
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
          ))}
        </div>

        <div className="pagination">
          {[1, 2].map((page) => (
            <button
              key={page}
              className={`btn btn-primary ${num === page ? "active" : ""} ms-1`}
              onClick={() => handleClick(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pagination1;
