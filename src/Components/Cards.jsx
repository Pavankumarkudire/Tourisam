import React, { useEffect, useState } from "react";
import DataAPI from "../assects/data/DataAPI";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    setData(DataAPI);
  }, []);


  return (
    <>
      <p className="ms-5 bg-warning rounded-pill" style={{width:"50px"}}>Explore</p>
      <h5 className="ms-5">Our featured tours</h5>
      <div className="container">
      <div className="row ">
        {data.length > 0 ? (
          data.map((product) => (
              <div className="card" style={{ width: "25%" }} >
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}> 
              <img src={product.photo} alt="" />
              <div className="p-2">
                <i
                  className="fa-solid fa-location-dot"
                  style={{ color: "#de601b" }}
                ></i>
                <span>{product.city}</span>
                <span  className="Reviews">{product.reviews}</span>
              </div>
              <div className="p-2">
                <h5>{product.title}</h5>
                <div className="CardPrice">
                  <p>
                    <span style={{ color: "#de601b" }}>${product.price}</span>
                    /per Person
                  </p>
                  <button className="Button">Book Now</button>
                </div>
              </div>
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
