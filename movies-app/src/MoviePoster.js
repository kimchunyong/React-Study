import React from 'react';
import PorpTypes from 'prop-types';

function MoviePoster({ poster }) {
  return <img src={poster} alt="" />;
}

MoviePoster.porpTypes = {
  poster: PorpTypes.string.isRequired,
}

export default MoviePoster;
