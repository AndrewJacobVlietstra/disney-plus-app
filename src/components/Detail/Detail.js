import React, { useEffect } from 'react';
import './Detail.styles.scss';
import { useSelector } from 'react-redux';
import { BASE_IMAGE_URL_WIDE } from '../../API/API';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();
  const movieState = useSelector(state => state?.movies);
  const { displayMovieData: movieData, displayMovieImages: movieImages } = movieState;

  console.log(movieData, movieImages);

  // Grab the first English logo
  const firstEnglishLogo = movieImages?.logos?.find(logo => logo.iso_639_1 === 'en');

  // Calculate movie runtime
  const convertedMovieRunTime = (inputTime) => {
    let hours = Math.floor(inputTime / 60);
    let minutes = inputTime % 60;
    return `${hours}h ${minutes}m`;
  };

  // Generate array of genres to join with commas
  let genresArray = [];
  movieData?.genres?.forEach(genre => {
    genresArray.push(genre.name);
  });


  return (
    <div className='details-container'>

      <div className='details-background-container-1'>
        <img className='details-background-image' src={`${BASE_IMAGE_URL_WIDE}${movieImages?.backdrops[0]?.file_path}`} />
      </div>

      <div className='details-background-container-2'>
        <img className='details-background-image' src={`${BASE_IMAGE_URL_WIDE}${movieImages?.backdrops[1]?.file_path}`} />
      </div>


      <div className='details-content'>
        <div className='details-image-title-container'>
          <img className='details-image-title' src={`${BASE_IMAGE_URL_WIDE}${firstEnglishLogo?.file_path}`} />
          <span className='go-back-button' onClick={() => window.history.back()}>{`❮ Go Back`}</span>
        </div>


        <div className='controls-container'>

          <button className='play-button controls-button'>
            <img src='images/play-icon-black.png' />
            <span>Play</span>
          </button>

          <button className='trailer-button controls-button'>
            <img src='images/play-icon-white.png' />
            <span>Trailer</span>
          </button>

          <button className='add-button controls-button'>
            <span>+</span>
          </button>

          <button className='group-watch-button controls-button'>
            <img src='images/group-icon.png' />
          </button>

        </div>

        <div className='details-subtitle-container'>
          <h4 className='details-subtitle'>
            {movieData?.release_date.split('-')[0]} • {convertedMovieRunTime(movieData?.runtime)} • {genresArray.join(', ')}
          </h4>
        </div>

        <div className='details-description-container'>
          <p className='details-description'>
            {movieData?.overview}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Detail;