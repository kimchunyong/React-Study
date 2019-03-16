import React, { Component } from 'react';
import './Movie.css';
import MoviePoster from './MoviePoster';
import PorpTypes from 'prop-types';

class Movie extends Component {
  static porpTypes = {
    title: PorpTypes.string.isRequired,
    poster: PorpTypes.string.isRequired,
  };

  render() {
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
