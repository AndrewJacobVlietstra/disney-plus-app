import React, { useEffect, useState } from 'react';
import './Movies.styles.scss';
import Movie from '../Movie/Movie';
import { useSelector, useDispatch } from 'react-redux';
import { updateMoviesList } from '../../redux/Movies/Movies';
import { API_KEY, BASE_URL, MOVIES_BY_POPULARITY, } from '../../API/API';

const Movies = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch(`${BASE_URL}${MOVIES_BY_POPULARITY}${API_KEY}`)
    .then(res => res.json())
    .then(data => dispatch(updateMoviesList(data.results)))
    .catch(err => console.error(err));
  }, []);
  
  const reduxMovies = useSelector(state => state?.moviesList?.movies?.filter((el, i) => i < 12));

  return (
    <div className='movies-container'>
      <h4>Recommended for You</h4>
      <div className='movies-content'>
        {reduxMovies
          ?.filter((movie, index) => index <= 3)
          ?.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>

      <h4>Popular</h4>
      <div className='movies-content'>
        {reduxMovies
          ?.filter((movie, index) => 3 < index && index <= 7)
          ?.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>

      <h4>New</h4>
      <div className='movies-content'>
        {reduxMovies
          ?.filter((movie, index) => 7 < index)
          ?.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Movies;