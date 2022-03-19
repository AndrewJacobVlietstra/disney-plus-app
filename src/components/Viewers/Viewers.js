import React from 'react';
import './Viewers.styles.scss';

const Viewers = () => {
  return (
    <div className='viewers-container'>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='images/viewers-disney.png' />
        <video className='viewer-bg-video' autoPlay loop muted playsInline>
          <source src='videos/disney.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='images/viewers-pixar.png' />
        <video className='viewer-bg-video' autoPlay loop muted playsInline>
          <source src='videos/pixar.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='images/viewers-marvel.png' />
        <video className='viewer-bg-video' autoPlay loop muted playsInline>
          <source src='videos/marvel.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='images/viewers-starwars.png' />
        <video className='viewer-bg-video' autoPlay loop muted playsInline>
          <source src='videos/star-wars.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='images/viewers-national.png' />
        <video className='viewer-bg-video' autoPlay loop muted playsInline>
          <source src='videos/national-geographic.mp4' type='video/mp4' />
        </video>
      </div>

      <div className='viewer-wrapper star-wrapper'>
        <img className='viewer-image star' src='images/viewers-star.png' />
        <video className='viewer-bg-video' autoPlay loop muted playsInline>
          <source src='videos/star.mp4' type='video/mp4' />
        </video>
      </div>

    </div>
  )
}

export default Viewers;