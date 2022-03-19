import React, { useEffect, useState } from 'react';
import './Movies.styles.scss';
import Movie from '../Movie/Movie';
import { useSelector, useDispatch } from 'react-redux';
import { popularMovies } from '../../redux/Movies/MoviesReducer';
import { API_KEY, BASE_URL, MOVIES, BY_POPULARITY, } from '../../API/API';
import { fetchFunction } from '../../API/fetchFunction';

const Movies = () => {
  let PAGE_NUMBER = '1';
  const PAGE = `&page=${PAGE_NUMBER}`;
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetchFunction(`${BASE_URL}${MOVIES}${API_KEY}${BY_POPULARITY}${PAGE}`, dispatch, popularMovies);
  }, []);
  
  const popularMoviesFiltered = useSelector(state => state?.movies?.popularMovies);

  return (
    <div className='movies-container'>

      <h4>Recommended for You</h4>
      <div className='movies-content'>
        {popularMoviesFiltered
          ?.filter((movie, index) => 8 <= index && index <= 11)
          ?.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>

      <h4>Popular</h4>
      <div className='movies-content'>
        {popularMoviesFiltered
          ?.filter((movie, index) => 11 < index && index <= 15)
          ?.map((movie) => <Movie key={movie.id} movie={movie} />)}
      </div>

    </div>
  )
}

export default Movies;