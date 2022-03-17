import React from 'react';
import './Home.styles.scss';
import ImageSlider from '../ImageSlider/ImageSlider';
import Viewers from '../Viewers/Viewers';

const Home = () => {
  return (
    <main className='home-container'>
      <ImageSlider />
      <Viewers />
    </main>
  )
}

export default Home;