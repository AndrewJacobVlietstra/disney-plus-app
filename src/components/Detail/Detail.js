import React, { useEffect, useState } from 'react';
import './Detail.styles.scss';
import { useSelector } from 'react-redux';
import { BASE_IMAGE_URL_WIDE, API_KEY } from '../../API/API';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  
  const navigate = useNavigate();
  const [movieTrailers, setMovieTrailers] = useState([]);
  const movieState = useSelector(state => state?.movies);
  const { displayMovieData: movieData, displayMovieImages: movieImages } = movieState;

  // Grab the first English logo, if no logo is available then use disney+ logo
  let firstEnglishLogo = movieImages?.logos?.find(logo => logo?.iso_639_1 === 'en');
  let logoPath = `${BASE_IMAGE_URL_WIDE + firstEnglishLogo?.file_path}`;
  if (firstEnglishLogo === undefined) logoPath = 'images/disney-plus-logo.png';

  // Calculate movie runtime
  const convertedMovieRunTime = (inputTime) => {
    let hours = Math.floor(inputTime / 60);
    let minutes = inputTime % 60;
    return `${hours}h ${minutes}m`;
  };

  // Generate array of genres to join with commas
  let genresArray = [];
  movieData?.genres?.forEach(genre => {
    genresArray.push(genre?.name);
  });

  // Fetch trailers for specific movie
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieData?.id}/videos?${API_KEY}language=en-US`)
      .then(res => res.json())
      .then(data => setMovieTrailers(data?.results?.reverse()))
      .catch(err => console.error(err));
  }, [movieData?.id])

  return (
    <div className='details-container'>

      <div className='details-background-container'>
        <img className='details-background-image' src={`${BASE_IMAGE_URL_WIDE}${movieImages?.backdrops?.[0]?.file_path}`} />
      </div>

      <div className='details-content'>
        <div className='details-image-title-container'>
          <img className='details-image-title' src={logoPath} />
          <span className='go-back-button' onClick={() => window.history.back()}>{`❮ Go Back`}</span>
        </div>


        <div className='controls-container'>

          <button className='play-button controls-button'>
            <img src='images/play-icon-black.png' />
            <span>Play</span>
          </button>

          <button className='trailer-button controls-button' onClick={() =>
              window.scroll({
                top: document.body.offsetHeight,
                left: 0,
                behavior: "smooth",
              })
            }>
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
            {movieData?.release_date.split('-')[0]} • {convertedMovieRunTime(movieData?.runtime)} • {genresArray?.join(', ')}
          </h4>
        </div>

        <div className='details-description-container'>
          <p className='details-tagline'>
            {movieData?.tagline}
          </p>
          <p className='details-description'>
            {movieData?.overview}
          </p>
        </div>

        <h4 className='trailers-title'>Trailers</h4>
        <hr />
        <div className='trailers-container'>
          {movieTrailers
            ?.filter((el, i) => i <= 5)
            ?.map(trailer => <iframe key={trailer?.id} src={`https://www.youtube.com/embed/${trailer?.key}`} allow="fullscreen;"></iframe>)}
        </div>

      </div>

    </div>
  )
}

export default Detail;