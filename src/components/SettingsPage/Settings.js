import React, { useState } from 'react';
import './Settings.styles.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUserName, updateUserImage, updateLocalStorageUser } from '../../redux/User/UserReducer';

const Settings = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const [username, setUsername] = useState('');
  const imageLinks = ['images/astronaut.png', 'images/mickey.png', 'images/minnie.png', 'images/donald.png', 'images/mando.jpg', 'images/grogu.jpg'];

  const handleUserNameChange = (e) => {
    e.preventDefault();

    if (username.length === 0) return;
    dispatch(updateUserName(username));
    dispatch(updateLocalStorageUser());
    setUsername('');
  };

  return (
    <div className='settings-page-container'>
      <div className='settings-content'>

        <div className='settings-user-profiles'>
          <div className='user-image-name-container'>
            <img className='user-image' src={user.userImage} />
            <p className='user-name'>{user.userName}</p>
          </div>

          <div className='user-add-profile'>
            <span className='user-add-sign'>+</span>
            <p className='user-add-profile-text'>Add Profile</p>
          </div>
        </div>

        <h2 className='settings-title'>Account Settings</h2>
        <hr />

        <div className='user-settings'>
          <form onSubmit={handleUserNameChange}>
            <label className='settings-label' htmlFor='username-input'>Change Username</label> <br />
            <input id='username-input' className='username-input' value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="off" placeholder='Type here' />
          </form>
        </div>

        <hr />
        <h4 className='change-image-title'>Change User Image</h4>
        <div className='change-profile-image'>
          {imageLinks.map(icon => <img key={icon} className='change-image' src={icon} onClick={() => {
            dispatch(updateUserImage(icon));
            return dispatch(updateLocalStorageUser());
          }} />)}
        </div>

      </div>
    </div>
  )
}

export default Settings;