import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import API_KEY from './components/apiKey';

console.log(API_KEY);

class App extends Component {
  render () {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

const container = document.querySelector('.container');
ReactDOM.render(<App />, container);
