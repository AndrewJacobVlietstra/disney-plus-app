import React from 'react';
import './Header_Mobile.styles.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header_Mobile = () => {
  const user = useSelector(state => state.user);
  console.log(user);

  return (
    <div className='mobile-nav-container'>
      <div className='mobile-nav'>
        <Link to='/home' className='header-menu-link'>
          <img src='images/home-icon.svg' alt='home-icon'/>
          <span>Home</span>
        </Link>
        <Link to='/search' className='header-menu-link'>
          <img src='images/search-icon.svg' alt='home-icon'/>
          <span>Search</span>
        </Link>
        <Link to='/home' className='header-menu-link'>
          <img src='images/watchlist-icon.svg' alt='home-icon'/>
          <span>Watchlist</span>
        </Link>
        <Link to='/home' className='header-menu-link'>
          <img src='images/home-icon.svg' alt='home-icon'/>
          <span>Account</span>
        </Link>
      </div>
    </div>
  )
}

export default Header_Mobile;