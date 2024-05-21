import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Serching = () => {
  const [tours, setTours] = useState([]);
  const [city, setCity] = useState("");
  const [distance, setDistance] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    if (city || distance || maxGroupSize) {
      getData();
    }
  }, [city, distance, maxGroupSize]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://tour-booking-tu7f.onrender.com/api/v1/tours/search/getTourBySearch?city=${encodeURIComponent(
          city
        )}&distance=${distance}&maxGroupSize=${maxGroupSize}`
      );
      const res = await response.json();

      if (res.data && Array.isArray(res.data)) {
        setTours(res.data);
      } else {
        setTours([]);
      }

      setSearchPerformed(true);
      console.log(res);
      console.log("Tours", tours);
    } catch (error) {
      console.error("Error fetching data:", error);
      setTours([]);
      setSearchPerformed(true);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      <div className="Serching ms-5">
        <div className="Border">
          <div>
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#de601b" }}
            ></i>
          </div>
          <div className="ms-2">
            <p>Location</p>
            <input
              type="text"
              placeholder="Where are you going?"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className="Border">
          <div>
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "#de601b" }}
            ></i>
          </div>
          <div className="ms-2">
            <p>Distance</p>
            <input
              type="text"
              placeholder="Distance k/m"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
        </div>
        <div className="Borders">
          <div>
            <i
              className="fa-solid fa-user-group"
              style={{ color: "#d97d26" }}
            ></i>
          </div>
          <div className="ms-2">
            <p>Max People</p>
            <input
              type="text"
              placeholder="0"
              value={maxGroupSize}
              onChange={(e) => setMaxGroupSize(e.target.value)}
            />
          </div>
          <div className=" rounded-2-top-start-pill  my-3">
            <button onClick={handleSearch} className="SerchingCard">
              <i className="fa-solid fa-magnifying-glass fa-xl"></i> Search
            </button>
          </div>
        </div>
      </div>
      <div className="search-results mt-4">
        {searchPerformed && (
          <>
            {tours.length === 0 && <p>No tours found</p>}
            {tours.length > 0 && (
              <div className="card-container">
                {tours.map((tour) => (
                  <div className="card">
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
          </>
        )}
      </div>
    </div>
  );
};

export default Serching;

// ------------------------------------
{
  /* <div className="search-results mt-4">
        {searchPerformed && ( 
          <>
            {tours.length === 0 && <p>No tours found</p>}
            {tours.length > 0 && (
              <div className="card-container">
                {tours.map((tour) => (
                  <div key={tour._id} className="card">
                    <div className="card-body">
                      <p><strong>City:</strong> {tour.city}</p>
                      <p><strong>Distance:</strong> {tour.distance} km</p>
                      <p><strong>Max Group Size:</strong> {tour.maxGroupSize}</p>
                      <p><strong>Name:</strong> {tour.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div> */
}
