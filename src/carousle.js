import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carousel2() {
  return (
    <Carousel data-bs-theme="dark" onTimeUpdate={1500}>
      <Carousel.Item>
        <img style={{height: '90vh'}}
          className="d-block w-100 "
          src={require("./image/bed.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '90vh'}}
          className="d-block w-100 "
          src={require("./image/sofa.jpg")}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '90vh'}}
          className="d-block w-100 h-80"
          src={require("./image/kitchen.jpg")}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
         
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel2;