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
    autoplaySpeed: 8000,
  };

  return (
    <Slider {...settings} className='image-slider-container'>
      <div className='image-wrapper'>
        <img className='image-slider-image encanto' src='images/slider-encanto-banner.jpg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image raya' src='images/slider-raya-banner.jpg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image onward' src='images/slider-badag.jpg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image luca' src='images/slider-luca-banner.jpeg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image burrow' src='images/slider-badging.jpg' />
      </div>

      <div className='image-wrapper'>
        <img className='image-slider-image wandavision' src='images/slider-scale.jpg' />
      </div>

      {/* <div className='image-wrapper'>
        <img className='image-slider-image wandavision-2' src='images/slider-scales.jpg' />
      </div> */}
    </Slider>
  )
}

export default ImageSlider;