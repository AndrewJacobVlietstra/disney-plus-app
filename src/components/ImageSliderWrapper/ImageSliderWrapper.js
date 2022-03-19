import React from "react";
import "./ImageSliderWrapper.styles.scss";
import { BASE_IMAGE_URL_WIDE } from "../../API/API";

const ImageSliderWrapper = ({ movie }) => {
  return (
    <div className="image-wrapper">
      <img
        className="image-slider-image encanto"
        src={`${BASE_IMAGE_URL_WIDE}${movie.backdrop_path}`}
        title={movie.original_title}
      />
    </div>
  );
};

export default ImageSliderWrapper;
