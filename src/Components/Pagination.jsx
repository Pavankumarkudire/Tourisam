import React, { useEffect, useState } from "react";
// import DataAPI from "../assects/data/DataAPI";

function Pagination1() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(1);
  const itemPerPage = 6;


  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(`https://tour-booking-tu7f.onrender.com/api/v1/tours`,
        {
            method: "GET",
            headers :{
                "app-id" : "65264833377b2d988a461078",
            },
        }
    );
    const res = await data.json();
    setData(res.data);
  }

  const handleClick = (page) => {
    setNum(page);
  };
  const startIndex = (num - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;



  return (
    <div>
      <div className="container  ">
        
          <div className="row">
            {data.slice(startIndex,endIndex).map((product, index) => (
              <div key={index} className="card col-md-4 p-3 " >
                <img src={product.photo} alt="" />
                <div className="p-2">
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#de601b" }}
                  ></i>
                  <span>{product.city}</span>
                  <span className="Reviews">{product.reviews.length}</span>
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
        
        <div className="pagination">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`btn btn-primary ${num === page ? 'active' : ""} ms-1`}
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
