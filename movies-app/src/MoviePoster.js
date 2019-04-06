import React from 'react';
import PorpTypes from 'prop-types';

function MoviePoster ({ poster, alt }) {
  return <img className='Movie__Poster' src={poster} alt={alt} title={alt} />;
}

MoviePoster.porpTypes = {
  poster: PorpTypes.string.isRequired,
  alt: PorpTypes.string.isRequired
};

export default MoviePoster;
