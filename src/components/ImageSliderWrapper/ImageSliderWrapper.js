import React from "react";
import "./ImageSliderWrapper.styles.scss";
import { BASE_IMAGE_URL_WIDE } from "../../API/API";

const ImageSliderWrapper = ({ movie }) => {
  return (
    <div className="image-wrapper">
      <img
        className="image-slider-image"
        src={`${BASE_IMAGE_URL_WIDE}${movie.backdrop_path}`}
        title={movie.original_title}
      />
      <div className="image-wrapper-info">
        <h4 className="image-wrapper-title">{movie.original_title}</h4>
        <p className="image-wrapper-overview">{movie.overview.length > 300 ? `${movie.overview.substring(0, 300)}...` : movie.overview}</p>
      </div>
    </div>
  );
};

export default ImageSliderWrapper;
