import React, { Component } from 'react';

import SelectTop from '../SelectTop/SelectTop';
import ResultBody from '../ResultBody/ResultBody';
import TransButton from '../TransButton/TransButton';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="text__wrapper">
        <SelectTop />
        <ResultBody />
        <TransButton />
      </div>
    );
  }
}

export default App;
