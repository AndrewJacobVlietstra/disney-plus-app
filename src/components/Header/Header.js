import React, { useState } from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logUserIn, logUserOut } from '../../redux/User/User';

const Header = () => {
  const navigate = useNavigate(); // navigate between pages
  const dispatch = useDispatch(); // redux dispatch method
  const user = useSelector(state => state.user); // grab user from redux store
  const [toggleLogout, setToggleLogout] = useState(false);

  return (
    <nav className={`header-container ${user.loggedIn ? '' : 'justify-space-between'}`}>
      <img className='header-logo' src='images/logo.svg'  alt='disney-logo' />

      {user.loggedIn ? (<div className='header-menu'>
        <Link to='/home' className='header-menu-link'>
          <img src='images/home-icon.svg' alt='home-icon'/>
          <span>home</span>
        </Link>
        <a className='header-menu-link'>
          <img src='images/search-icon.svg' alt='search-icon'/>
          <span>search</span>
        </a>
        <a className='header-menu-link'>
          <img src='images/watchlist-icon.svg' alt='watchlist-icon'/>
          <span>watchlist</span>
        </a>
        <a className='header-menu-link'>
          <img src='images/original-icon.svg' alt='originals-icon'/>
          <span>originals</span>
        </a>
        <a className='header-menu-link'>
          <img src='images/movie-icon.svg' alt='movie-icon'/>
          <span>movies</span>
        </a>
        <a className='header-menu-link'>
          <img src='images/series-icon.svg' alt='series-icon'/>
          <span>series</span>
        </a>
      </div>) : null}
      
      {user.loggedIn ? (
        <img className="header-user-image" src="images/astronaut.png" onClick={() => setToggleLogout(!toggleLogout)} />
      ) : (
        <button className="login-button" onClick={() => {dispatch(logUserIn()); return navigate('/home');}}>Login</button>
      )}

      {toggleLogout ? (
      <div className='logout-modal'>
        <h4>{user.userName}</h4>
        <button className='modal-button'>Settings</button>
        <button className='modal-button' onClick={() => {dispatch(logUserOut()); navigate('/'); return setToggleLogout(!toggleLogout)}}>Log Out</button>
      </div>
      ) : null}
    </nav>
  )
}

export default Header;