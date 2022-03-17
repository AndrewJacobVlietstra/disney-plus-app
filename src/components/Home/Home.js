import React from 'react';
import './Home.styles.scss';
import ImageSlider from '../ImageSlider/ImageSlider';

const Home = () => {
  return (
    <main className='home-container'>
      <ImageSlider />
    </main>
  )
}

export default Home;