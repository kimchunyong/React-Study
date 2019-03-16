import React, { Component } from 'react';
import './Movie.css';
import MoviePoster from './MoviePoster';

const movies = [];

class Movie extends Component {
  render () {
    return (
      <div>
        <MoviePoster />
        <h1>영화</h1>
      </div>
    );
  }
}

export default Movie;
