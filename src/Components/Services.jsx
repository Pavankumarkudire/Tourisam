import React from "react";
import SImg from "../assects/images/weather.png"
import SImg1 from "../assects/images/guide.png"
import SImg2 from "../assects/images/guide.png"

const Servises = () => {
  return (
      <div className="Serve ">
        <div className="Services  ms-4">
          <p> What We serve</p>
          <h5>We offer our best services</h5>
        </div>
        <div className="Border ">
          <img src={SImg} alt="" className="SImg"/>
          <div>
            <h5>Caliculater Weather</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              laborum! Architecto, expedita culpa!
            </p>
          </div>
        </div>
        <div className="Border ">
            <img src={SImg1} alt="" className="SImg"/>
          <div>
            <h5>Caliculater Weather</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              laborum! Architecto, expedita culpa!
            </p>
          </div>
        </div>
        <div className="Border ">
          <img src={SImg2} alt=""  className="SImg"/>
          <div>
            <h5>Caliculater Weather</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              laborum! Architecto, expedita culpa!
            </p>
          </div>
        </div>
      </div>

  );
};

export default Servises;
