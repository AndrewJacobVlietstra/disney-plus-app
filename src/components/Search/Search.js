import React, { useState } from 'react';
import './Search.styles.scss';
import { API_KEY } from '../../API/API';
import Movie_TV_Result from '../Movie_TV_Result/Movie_TV_Result';

const Search = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  let query = `https://api.themoviedb.org/3/search/multi?${API_KEY}language=en-US&query=${search}&page=1&include_adult=false`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (search.length === 0) return;
    await fetch(query)
      .then(res => res.json())
      .then(data => setResults(data?.results.filter((el, i) => el?.media_type !== "person")))
      .catch(err => console.error(err));

    return setSearch('');
  };

  // console.log(results);
  return (
    <div className='search-page-container'>
      <form onSubmit={handleSubmit} className='search-form'>
        <input className='search-input' id='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for Movies, or TV Shows' />
      </form>

      <div className='search-results-container'>
        {results?.map(movie => <Movie_TV_Result key={movie?.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search;