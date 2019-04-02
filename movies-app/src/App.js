import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: 'Matrix',
    poster: 'http://cfile230.uf.daum.net/image/120165194C241D693330B4',
  },
  {
    title: 'Pull Metal Jacket',
    poster: 'http://images.amazon.com/images/P/B00005ATQF.01.LZZZZZZZ.jpg',
  },
  {
    title: 'OldBoy',
    poster:
      'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79861/79861_1000.jpg',
  },
  {
    title: 'Star Wars',
    poster:
      'https://upload.wikimedia.org/wikipedia/ko/thumb/6/6a/%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg/250px-%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88_%EA%B9%A8%EC%96%B4%EB%82%9C_%ED%8F%AC%EC%8A%A4.jpg',
  },
];

class App extends Component {
  //render : componentWillMount() => render() => componentDidMount()
  //update : componentWillReciveProps() => shouldComponentUpdate => componentWillUpdate() => render() => ComponentDidUpdate()
  componentWillMount() {
    // 1
    // console.log(`i'm willMount!`);
  }

  componentDidMount() {
    // 3
    // console.log(`i'm DidMount!`);
    setTimeout(() => {
      this.setState({
        greeting: 'hellow again',
      });
    }, 5000);
  }

  state = {
    greeting: 'Hello',
  };

  render() {
    // 2
    // console.log(`i'm render`);
    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
