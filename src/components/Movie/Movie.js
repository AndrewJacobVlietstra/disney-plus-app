import React from "react";
import './Movie.styles.scss';
import { BASE_IMAGE_URL } from "../../API/API";

const Movie = ({ movie }) => {
  return (
    <div className="movie-wrapper">
      <img className="movie-image" src={`${BASE_IMAGE_URL}${movie.poster_path}`} />
    </div>
  );
};

export default Movie;
