import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  state = {};

  //render : componentWillMount() => render() => componentDidMount()
  //update : componentWillReciveProps() => shouldComponentUpdate => componentWillUpdate() => render() => ComponentDidUpdate()
  componentWillMount() {
    // 1
    // console.log(`i'm willMount!`);
  }

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    return this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
          key={movie.id}
        />
      );
    });
  };

  _loadPrev = () => {
    return <div className="spinner" />;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };

  _callApi = () => {
    return fetch(
      'https://yts.am/api/v2/list_movies.json?sort_by=download_count'
    )
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  render() {
    // 2
    // console.log(`i'm render`);
    const { movies } = this.state;
    return (
      <div className={movies ? 'App' : 'App--loading'}>
        {this.state.movies ? this._renderMovies() : this._loadPrev()}
      </div>
    );
  }
}

export default App;
