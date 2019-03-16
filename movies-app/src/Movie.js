import React, { Component } from 'react';
import './Movie.css';
import MoviePoster from './MoviePoster';

class Movie extends Component {
  render () {
    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Movie;
