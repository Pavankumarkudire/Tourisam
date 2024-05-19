import React from "react";
import Navbar from "./Navbar";
import "../css/Style.css";
import world from "../images/world.png";
import HeroImg from "../images/hero-img01.jpg";
import HeroVideo from "../images//hero-video.mp4";
import HeroImg1 from "../images/hero-img02.jpg";
import Serching from "./Serching";
import Servises from "./Services";
import Cards from "./Cards";
import Experience from "./Experience";
import Gallery from "./Gallery";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Client from "./Client";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="Container">
        <div className="row p-5 ms-3">
          <div className="col-md-6 p-4 ">
            <span className="Text-Box  bg-warning rounded-pill">
              know before you go
            </span>
            <span>
              <img src={world} alt="" width="40px" />
            </span>
            <h2>
              Travelling opens the doors to creating{" "}
              <span className="text-warning">Memories</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              error rem neque perspiciatis ipsam illo commodi eaque nobis
              similique? Nam tempora debitis cumque soluta. Sunt vero dolores
              eius labore nobis?
            </p>
          </div>
          <div className="col-md-6  p-5">
            <div className="HeroImages">
              <div>
                <img src={HeroImg} alt="" className="HeroImg" />
              </div>
              <div>
                <video src={HeroVideo} className="HeroVideo" controls></video>
              </div>
              <div>
                <img src={HeroImg1} alt="" className="HeroImg1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Serching />
      <Servises />
      <Cards />
      <Experience />
      <Gallery />
      <Client />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;


// {data.length > 0 ? (
//     data.map((product) => (
//       <div className="col-4" key={product.id}>
//         <div className="card" style={{ width: "100%" }}>
//           <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: '#000000' }}>
//             <img src={product.photo} className="card-img-top" alt="" />
//             <div className="card-body">
//                  <span>{product.city}</span>
//               <span className="Reviews">{product.reviews}</span>
//               <h5 className="card-title">{product.title}</h5>
//               <div className="CardPrice">
//                 <p>
//                   <span style={{ color: "#de601b" }}>${product.price}</span>
//                   /per Person
//                 </p>
//                 <button className="Button">Book Now</button>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     ))
//   ) : (
//     <p>Loading...!</p>
//   )}
