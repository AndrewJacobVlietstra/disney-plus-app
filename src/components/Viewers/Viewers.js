import React from 'react';
import './Viewers.styles.scss';

const Viewers = () => {
  return (
    <div className='viewers-container'>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='/images/viewers-disney.png' />
      </div>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='/images/viewers-pixar.png' />
      </div>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='/images/viewers-marvel.png' />
      </div>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='/images/viewers-starwars.png' />
      </div>

      <div className='viewer-wrapper'>
        <img className='viewer-image' src='/images/viewers-national.png' />
      </div>

    </div>
  )
}

export default Viewers;