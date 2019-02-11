import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import API_KEY from './components/apiKey';

YTSearch({ key: API_KEY, term: '클템' }, function (data) {
  console.log(data);
});

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
