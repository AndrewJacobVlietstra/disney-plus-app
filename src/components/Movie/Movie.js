import React from "react";
import './Movie.styles.scss';
import { BASE_IMAGE_URL } from "../../API/API";

const Movie = ({ movie }) => {
  return (
    <div className="movie-wrapper">
      <img className="movie-image" src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} title={movie.original_title} />
      <div className="movie-info-container">
        <h4 className="movie-title">{movie.original_title}</h4>
        <p className="movie-overview">{movie.overview.length > 300 ? `${movie.overview.substring(0, 300)}...` : movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
