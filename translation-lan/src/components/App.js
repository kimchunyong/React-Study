import React, { Component } from 'react';
import TextArea from './TextArea';
import TextResult from './TextResult';

class App extends Component {
  render() {
    return (
      <div>
        <TextArea />
        <TextResult />
      </div>
    );
  }
}

export default App;
