import React from 'react';
import './Header_Mobile.styles.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header_Mobile = () => {
  const user = useSelector(state => state.user);

  return user.loggedIn ? (
    <div className='mobile-nav-container'>
      <div className='mobile-nav'>
        <Link to='/home' className='header-menu-link'>
          <img className='nav-icon' src='images/home-icon.svg' alt='home-icon'/>
        </Link>
        <Link to='/search' className='header-menu-link'>
          <img className='nav-icon' src='images/search-icon.svg' alt='search-icon'/>
        </Link>
        <Link to='/watchlist' className='header-menu-link'>
          <img className='nav-icon' src='images/watchlist-icon.svg' alt='watchlist-icon'/>
        </Link>
        <Link to='/settings' className='header-menu-link'>
          <img className='user-image' src={user.userImage} alt='account-icon'/>
        </Link>
      </div>
    </div>
  ) : null
}

export default Header_Mobile;