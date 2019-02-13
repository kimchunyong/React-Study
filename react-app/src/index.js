import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from './components/apiKey';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: '클템' }, videos => {
      // this.setState({ videos: videos });
      this.setState({ videos });
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

const container = document.querySelector('.container');
ReactDOM.render(<App />, container);
