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
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <Slider {...settings} className='image-slider-container'>
      <div className='image-wrapper'>
        <img className='image-slider-image' src='/images/slider-encanto-banner.jpg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image' src='/images/slider-raya-banner.jpg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image' src='/images/slider-badag.jpg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image' src='/images/slider-badging.jpg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image' src='/images/slider-scale.jpg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image' src='/images/slider-scales.jpg' />
      </div>
    </Slider>
  )
}

export default ImageSlider;