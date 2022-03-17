import React from 'react';
import './ImageSlider.styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <Slider {...settings} className='image-slider-container'>
      <h1>Hi</h1>
      <h1>Yo</h1>
      <h1>Bye</h1>
    </Slider>
  )
}

export default ImageSlider;