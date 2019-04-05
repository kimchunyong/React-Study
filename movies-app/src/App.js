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
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(potato => potato.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))

  }

  _renderMovies = () => {
    return this.state.movies.map((movie, idx) => {
      return <Movie title={movie.title} poster={movie.poster} key={idx} />;
    });
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
