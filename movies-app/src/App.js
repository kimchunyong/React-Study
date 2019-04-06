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
    console.log(this.state.movies);
    return this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title}
          poster={movie.large_cover_image}
          key={movie.id}
        />
      );
    });
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  render() {
    // 2
    // console.log(`i'm render`);
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
