import React, { Component } from 'react';

class MoviePoster extends Component {
  render () {
    return <img src={this.props.poster} alt='' />;
  }
}

export default MoviePoster;
