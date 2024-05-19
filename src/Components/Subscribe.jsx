import React from "react";
import SubScribeImg from "../images/male-tourist.png"

const Subscribe = () => {
  return (
    <div className="SubscribePage">
      <div className=" SubscribeP ">
        <h4 className="SubscribeText">Subscribe now for usefull travelling information.</h4>
        <div className="SubscribeInputPage">
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni odio suscipit, itaque totam labore quo recusandae non laborum obcaecati officia!</p>
      </div>
      <div >
        <img src={SubScribeImg} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
