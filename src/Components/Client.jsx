import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImg1 from "../images/ava-1.jpg";
import SliderImg2 from "../images/ava-2.jpg";
import SliderImg3 from "../images/ava-3.jpg";
const Client = () => {
  const clint = [
    {
      id: 1,
      name: "John Deo",
      customer: "Customer",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg1,
    },
    {
      id: 2,
      name: "Cathrine jo",
      customer: "Clint",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg2,
    },
    {
      id: 3,
      name: "John Deo",
      customer: "Customer",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg3,
    },
    {
      id: 4,
      name: "John Deo",
      customer: "Customer",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg1,
    },
    {
      id: 5,
      name: "Cathrine jo",
      customer: "Clint",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg2,
    },
    {
      id: 6,
      name: "John Deo",
      customer: "Customer",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg3,
    },
    {
      id: 7,
      name: "John Deo",
      customer: "Customer",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg1,
    },
    {
      id: 8,
      name: "John Deo",
      customer: "Customer",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg2,
    },
    {
      id: 9,
      name: "John Deo",
      customer: "Customer",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg3,
    },
    {
      id: 10,
      name: "John Deo",
      customer: "Customer",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus ipsa nesciunt iusto ex rem, minus animi dolorum et totam beatae unde atque accusamus rerum nisi eveniet, quaerat blanditiis expedita.",
      Image: SliderImg1,
    },
  ];

  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="ClintPage">
      <p className="ClintSession">Clints Love</p>
      <h3>what our clints say about us</h3>
      <Slider {...Settings}>
        {clint.map((data, index) => (
          <div key={index} style={{ display: "flex" }}>
            <div className="Clints">
              {data.Description}
              <div className="clintDetails">
                <p className="ClintImage">
                  <img
                    src={data.Image}
                    alt={data.name}
                    style={{ width: "100%" }}
                  />
                </p>
                <div style={{ margin: "0px 20px" }}>
                  <p >{data.name}</p>
                  <p>{data.customer}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Client;
