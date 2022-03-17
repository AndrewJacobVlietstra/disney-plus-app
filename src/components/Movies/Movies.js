import React from 'react';
import './Movies.styles.scss';

const Movies = () => {
  return (
    <div className='movies-container'>
      <h4>Recommended for You</h4>
      <div className='movies-content'>

        <div className='movie-wrapper'>
          <img className='movie-image' src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg' />
        </div>
        
        <div className='movie-wrapper'>
          <img className='movie-image' src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg' />
        </div>

        <div className='movie-wrapper'>
          <img className='movie-image' src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg' />
        </div>

        <div className='movie-wrapper'>
          <img className='movie-image' src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EA416AD3B15FCC1BADC817A932A57FFF707556DB2233FFCB4CFEB7C8EEDE23C/scale?width=400&aspectRatio=1.78&format=jpeg' />
        </div>

      </div>
    </div>
  )
}

export default Movies;