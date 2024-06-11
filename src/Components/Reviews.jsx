import React, { useEffect, useState } from "react";
import Avatar from "../images/avatar.jpg";
import { useAuth } from "./Authentication";
import "../css/Style.css";
import { useParams } from "react-router-dom";

const Reviews = ({ product }) => {
  const [rating, setRating] = useState(0);
  const [newReview, setNewReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const { isLoggedIn } = useAuth();
  const { id } = useParams();

  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    fetch(`https://tour-booking-tu7f.onrender.com/api/v1/review/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews || []);
      })
      .catch((error) => console.error("error fecthing reviews:", error));
  });
  console.log(product);
  const starHandleClick = (index) => {
    setRating(index + 1);
  };
  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmit = () => {
    if (isLoggedIn) {
      console.log("Booking Success");
    } else {
      alert("Please login to sumbit a review");
      return;
    }
    if (rating === 0 || newReview.trim() === "") {
      alert("please select a rating and review");
      return;
    }
    const newReviewObj = {
      rating,
      text: newReview,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    };

    setReviews([...reviews, newReviewObj]);
    setRating(0);
    setNewReview("");
  };

  return (
    <>
      <div className="Reviews border p-4">
        <h5>Riviews ({product.reviews.length + reviews.length} reviews)</h5>
        <div className="ratingStar">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              onClick={() => starHandleClick(index)}
              style={{
                cursor: "pointer",
                color: index < rating ? "gold" : "gray",
              }}
            >
              &#9733;
            </span>
          ))}
        </div>
        <div className="ProductSerchingPage">
          <input
            type="text"
            placeholder="share your thoughts"
            value={newReview}
            onChange={handleReviewChange}
          />
          <button onClick={handleSubmit}>submit</button>
        </div>
        {product.reviews.map((review, index) => {
          const reviewDate = new Date(review.createdAt);
          const formatedData = reviewDate.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });
          return (
            <div className="userReviews border" key={index}>
              <img src={Avatar} alt="" />
              <div className="name-date">
                <span>
                  <b>{review.username}</b>
                </span>
                <br />
                <span>{formatedData}</span>
              </div>
              <p>
                {review.rating.toFixed(1)}
                <i
                  className="fa-regular fa-star"
                  style={{ color: "#faa935" }}
                ></i>
              </p>
              <h6>{review.reviewText}</h6>
            </div>
          );
        })}

        {reviews.map((review, index) => (
          <div className="userReviews border" key={index}>
            <img src={Avatar} alt="" />
            <div className="name-date">
              <span>
                <b>{userData.data.username}</b>
              </span>
              <br />
              <span>{review.date}</span>
            </div>

            <p>
              {review.rating.toFixed(1)} {""}
              <i
                className="fa-regular fa-star"
                style={{ color: "#faa935" }}
              ></i>
            </p>
            <h6>{review.text}</h6>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;

///---------------------------

// import React, { useEffect, useState } from "react";
// import Avatar from "../images/avatar.jpg";
// import { useAuth } from "./Authentication";
// import "../css/Style.css"
// import { useParams } from "react-router-dom";

// const Reviews = ({ product }) => {
//   const [rating, setRating] = useState(0);
//   const [newReview, setNewReview] = useState("");
//   const [reviews, setReviews] = useState([]);
//   const { isLoggedIn } = useAuth();
//   const {id} = useParams();

//   const userData = JSON.parse(localStorage.getItem("userData"));

//   useEffect(() => {
//     fetch(`https://tour-booking-tu7f.onrender.com/api/v1/review/${id}`)
//     .then(response => response.json())
//     .then(data => {
//         setReviews(data.reviews || [])
//     })
//     .catch(error => console.error("error fecthing reviews:",error));
//   })
//   console.log(product);
//   const starHandleClick = (index) => {
//     setRating(index + 1);
//   };
//   const handleReviewChange = (e) => {
//     setNewReview(e.target.value);
//   };

//   const handleSubmit = () => {

//     if (isLoggedIn) {
//       console.log("Booking Success");
//     } else {
//       alert("Please login to sumbit a review");
//       return;
//     }
//     if (rating === 0 || newReview.trim() === "") {
//       alert("please select a rating and review");
//       return;
//     }
//     const newReviewObj = {
//       rating,
//       text: newReview,
//       date: new Date().toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric",
//       }),
//     };

//     setReviews([...reviews, newReviewObj]);
//     setRating(0);
//     setNewReview("");
//   };

//   return (
//     <>
//       <div className="Reviews border p-4">
//         <h5>Riviews ({product.reviews.length + reviews.length} reviews)</h5>
//         <div className="ratingStar">
//           {[...Array(5)].map((_, index) => (
//             <span
//               key={index}
//               onClick={() => starHandleClick(index)}
//               style={{
//                 cursor: "pointer",
//                 color: index < rating ? "gold" : "gray",
//               }}
//             >
//               &#9733;
//             </span>
//           ))}
//         </div>
//         <div className="ProductSerchingPage">
//           <input
//             type="text"
//             placeholder="share your thoughts"
//             value={newReview}
//             onChange={handleReviewChange}
//           />
//           <button onClick={handleSubmit}>submit</button>
//         </div>
//         {product.reviews.map((review, index) => {
//           const reviewDate = new Date(review.createdAt);
//           const formatedData = reviewDate.toLocaleDateString("en-US", {
//             month: "long",
//             day: "numeric",
//             year: "numeric",
//           });
//           return (
//             <div className="userReviews border" key={index}>
//               <img src={Avatar} alt="" />
//               <div className="name-date">
//                 <span><b>{review.username}</b></span><br/>
//                 <span>{formatedData}</span>
//               </div>
//               <p>{review.rating.toFixed(1)}
//               <i
//                 className="fa-regular fa-star"
//                 style={{ color: "#faa935" }}
//               ></i></p>
//               <h6>{review.reviewText}</h6>
//             </div>
//           );
//         })}

//         {reviews.map((review, index) => (
//           <div className="userReviews border" key={index}>
//             <img src={Avatar} alt="" />
//               <div className="name-date">
//                 <span><b>{userData.username}</b></span><br/>
//                 <span>{review.date}</span>
//               </div>

//               <p>{review.rating.toFixed(1)} {""}
//                 <i
//                   className="fa-regular fa-star"
//                   style={{ color: "#faa935" }}
//                 ></i>
//               </p>
//             <h6>{review.text}</h6>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Reviews;
