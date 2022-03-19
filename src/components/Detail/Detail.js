import React from 'react';
import './Detail.styles.scss';

const Detail = () => {
  return (
    <div className='details-container'>

      <div className='details-background-container'>
        <img className='details-background-image' src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' />
      </div>

      <div className='details-image-title-container'>
        <img className='details-image-title' src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' />
      </div>

      <div className='controls-container'>

        <button className='play-button controls-button'>
          <img src='images/play-icon-black.png' />
          <span>Play</span>
        </button>

        <button className='trailer-button controls-button'>
          <img src='images/play-icon-white.png' />
          <span>Trailer</span>
        </button>

        <button className='add-button controls-button'>
          <span>+</span>
        </button>

        <button className='group-watch-button controls-button'>
          <img src='images/group-icon.png' />
        </button>

      </div>

      <div className='details-subtitle-container'>
        <h4 className='details-subtitle'>
          2018 • 7m • Family, Fantasy, Kids, Animation
        </h4>
      </div>

      <div className='details-description-container'>
        <p className='details-description'>
          A chinese mom who's sad when her grown son leaves home get another
          chance at motherhood when one of her dumplings springs to life.
          But she finds that nothing stays cute and small forever.
        </p>
      </div>

    </div>
  )
}

export default Detail;