import React, { useEffect } from 'react';
import './Home.styles.scss';
import ImageSlider from '../ImageSlider/ImageSlider';
import Viewers from '../Viewers/Viewers';
import Movies from '../Movies/Movies';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.loggedIn) navigate('/');
  }, []);
  

  return (
    <main className='home-container'>
      <ImageSlider />
      <Viewers />
      <Movies />
    </main>
  )
}

export default Home;