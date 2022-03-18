import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='header-container'>
      <img className='header-logo' src='/images/logo.svg'  alt='disney-logo' />
      <div className='header-menu'>
        <Link to='/' className='header-menu-link'>
          <img src='/images/home-icon.svg' alt='home-icon'/>
          <span>home</span>
        </Link>
        <a className='header-menu-link'>
          <img src='/images/search-icon.svg' alt='search-icon'/>
          <span>search</span>
        </a>
        <a className='header-menu-link'>
          <img src='/images/watchlist-icon.svg' alt='watchlist-icon'/>
          <span>watchlist</span>
        </a>
        <a className='header-menu-link'>
          <img src='/images/original-icon.svg' alt='originals-icon'/>
          <span>originals</span>
        </a>
        <a className='header-menu-link'>
          <img src='/images/movie-icon.svg' alt='movie-icon'/>
          <span>movies</span>
        </a>
        <a className='header-menu-link'>
          <img src='/images/series-icon.svg' alt='series-icon'/>
          <span>series</span>
        </a>
      </div>
      <img className='header-user-image' src='/images/astronaut.png' />
    </nav>
  )
}

export default Header;