import React, { useEffect } from 'react';
import './Home.styles.scss';
import ImageSlider from '../ImageSlider/ImageSlider';
import Viewers from '../Viewers/Viewers';
import Movies from '../Movies/Movies';
import { API_KEY } from '../../app/API'

const Home = () => {

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.error(err));
  // }, []);

  return (
    <main className='home-container'>
      <ImageSlider />
      <Viewers />
      <Movies />
    </main>
  )
}

export default Home;