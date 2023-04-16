import { useState } from "react";
import slides from "../data/slides.json";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import "../styles/slide.css";

const rightArrowStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  right: "-32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 10,
  cursor: "pointer",
  transform: "scale(2) rotateY(30deg)",
  backgroundColor: "#91876c",
};

const leftArrowStyles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "-32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 10,
  cursor: "pointer",
  transform: "scale(2) rotateY(30deg)",
  backgroundColor: "#91876c",
};

const sliderStyles = {
  position: "relative" as "relative",
  height: "90vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section style={sliderStyles}>
      <IconButton onClick={prevSlide} style={leftArrowStyles}>
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton onClick={nextSlide} style={rightArrowStyles}>
        <ArrowForwardIosIcon />
      </IconButton>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.img} alt="" className="imageforslide" />
            )}
          </div>
        );
      })}
    </section>
  );
}
export default ImageSlider;
