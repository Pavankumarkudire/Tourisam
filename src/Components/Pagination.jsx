import React, { useEffect, useState } from "react";
import DataAPI from "../assects/data/DataAPI";

function Pagination1() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    setData(DataAPI);
  });

  const handleClick = (num) => {
    setNum(num);
  };
  return (
    <div>
      <div className="container  ">
        <div className="row">
          <div className="row">
            {data.map((product) => (
              <div className="card p-0" style={{ width: "20%" }}>
                <img src={product.photo} alt="" />
                <div className="p-2">
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#de601b" }}
                  ></i>
                  <span>{product.city}</span>
                  <span className="Reviews">{product.reviews}</span>
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
              </div>
            ))}
          </div>
        </div>
        {[1, 2].map((num) => (
          <button
            className=" btn btn-primary ms-1"
            onClick={() => handleClick(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination1;
