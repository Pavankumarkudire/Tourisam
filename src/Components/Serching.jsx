import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";

const Serching = () => {
  const [tours, setTours] = useState([]);
  const [city, setCity] = useState("");
  const [distance, setDistance] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const navigation = useNavigate();


  const getData = async () => {
    try {
      const response = await fetch(
        `https://tour-booking-tu7f.onrender.com/api/v1/tours/search/getTourBySearch?city=${encodeURIComponent(
          city
        )}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
        {
          method: "GET",
          headers: {
            "app-id": "65264833377b2d988a461078",
          },
        }
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

  useEffect(() => {
    if (searchPerformed) {
        navigation(`/tours/Search?city=${encodeURIComponent(city)}&distance=${distance}&maxGroupSize=${maxGroupSize}`, { state: { tours } });
    }
  }, [searchPerformed, tours, navigation]);
  return (
    <>
      

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
    </>
  );
};


export default Serching;
