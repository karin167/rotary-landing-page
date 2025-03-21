import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css"; // Import the new CSS

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img src="/images/rotary1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Rotary Event</h3>
            <p>Join our upcoming charity event and make a difference!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="/images/rotary2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Community Engagement</h3>
            <p>Be part of a greater cause while having fun!</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="/images/rotary3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Support & Impact</h3>
            <p>Every contribution helps create a better future.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
