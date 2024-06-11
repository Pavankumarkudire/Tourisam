import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Booking = ({ product }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("userData:", userData);
  const token = localStorage.getItem("authToken");
  console.log("Token:",token);
  const [bookingInfo, setBookingInfo] = useState({
    fullname: "",
    phoneNumber: "",
    date: "",
    numberOfPeople: 1,
  });
  const SubmitBooking = async () => {
    try {
      const response = await fetch(
        `https://tour-booking-tu7f.onrender.com/api/v1/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            ...bookingInfo,
            tourId: userData.id,
            userId: userData.id,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setBookingInfo(result);
      navigate("/tours/Booking");
    } catch (error) {
      console.error("Error submitting bokking:", error);
    }
  };
  return (
    <div>
      <div className=" Bookings ">
        <div className="Booking">
          <p>
            {product.price} <i className="fa-solid fa-xmark"></i>{" "}
            {product.maxGroupSize} person
          </p>
          <p>{product.price * product.maxGroupSize}</p>
        </div>
        <div className="Booking">
          <p>Service Charges</p>
          <p>10</p>
        </div>
        <div className="Booking">
          <p>Total</p>
          <p>{product.price * product.maxGroupSize + 10}</p>
        </div>
        <button className="product-Booking" onClick={SubmitBooking}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
 


///______________________________________



// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const Booking = ({ product }) => {
//     const {id} = useParams();
//     const navigate = useNavigate()
//   const userData = JSON.parse(localStorage.getItem("userData"));
//   const [bookingInfo, setBookingInfo] = useState({
//     fullname: "",
//     phoneNumber: "",
//     date: "",
//     numberOfPeople: 1,
//   });
//   const SubmitBooking = async () => {
//     const response = await fetch(
//       `https://tour-booking-tu7f.onrender.com/api/v1/booking`,
//       {
//         method: "POST",
//         headers: {
//           "contenct-type": "application/json",
//         },
//         body: JSON.stringify({
//           ...bookingInfo,
//           tourId: id,
//           userId: userData.id,
//         }),
//       }
//     );

//     const result = response.json();
//     setBookingInfo(result);
//     navigate('/tours/Booking')
//     console.log(result);
//   };
//   return (
//     <div>
//       <div className=" Bookings ">
//         <div className="Booking">
//           <p>
//             {product.price} <i className="fa-solid fa-xmark"></i>{" "}
//             {product.maxGroupSize} person
//           </p>
//           <p>{product.price * product.maxGroupSize}</p>
//         </div>
//         <div className="Booking">
//           <p>Service Charges</p>
//           <p>10</p>
//         </div>
//         <div className="Booking">
//           <p>Total</p>
//           <p>{product.price * product.maxGroupSize + 10}</p>
//         </div>
//         <button className="product-Booking" onClick={SubmitBooking}>
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Booking;

