import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ banner }) => {
//   console.log("Start", banner.start);
  return (
    <Carousel fade>
      {banner.start?.map((item, index) =>(
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item} alt="First slide" />
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default Slider;
