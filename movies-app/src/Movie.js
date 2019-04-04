import React from 'react';
import './Movie.css';
import MoviePoster from './MoviePoster';
import PorpTypes from 'prop-types';


function Movie({ title, poster }) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>
        {title}
      </h1>
    </div>
  )
}

Movie.porpTypes = {
  poster: PorpTypes.string.isRequired,
  title: PorpTypes.string.isRequired,
}

export default Movie;
