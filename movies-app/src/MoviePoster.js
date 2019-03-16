import React, { Component } from 'react';
import PorpTypes from 'prop-types';

class MoviePoster extends Component {
  static porpTypes = {
    poster: PorpTypes.string.isRequired,
  };
  render() {
    return <img src={this.props.poster} alt="" />;
  }
}

export default MoviePoster;
