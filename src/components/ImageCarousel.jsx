import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
import { useTranslation } from "react-i18next";

const ImageCarousel = () => {
  const { t } = useTranslation();

  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item>
          <img src="/images/rotary1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>{t("carousel1Title")}</h3>
            <p>{t("carousel1Text")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="/images/rotary2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>{t("carousel2Title")}</h3>
            <p>{t("carousel2Text")}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="/images/rotary3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>{t("carousel3Title")}</h3>
            <p>{t("carousel3Text")}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
