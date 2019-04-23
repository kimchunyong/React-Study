import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {};
  componentDidMount() {
    this._getBooks();
  }

  _getBooks = async () => {
    const bookInfo = await this._callApi();
    this.setState({
      bookInfo,
    });
  };

  _callApi = () => {
    const _apiKey = 'KakaoAK 6c01e7d9aa8f3566e902627b81bfd6a9';
    const _url = 'https://dapi.kakao.com/v3/search/book';
    const _getQuery = `?query=미움받을 용기`;

    const _myHeaders = new Headers();
    _myHeaders.append('Authorization', _apiKey);

    const _init = {
      method: 'get',
      headers: _myHeaders,
    };

    return fetch(_url + _getQuery, _init)
      .then(res => res.json())
      .then(json => json.documents)
      .catch(err => console.log(err));
  };
  render() {
    return <div className="App">1</div>;
  }
}

export default App;
