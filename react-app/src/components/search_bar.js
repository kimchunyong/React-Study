import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.onInputChange} />
        {/*z
          <p>value of the input : {this.state.term}</p>
        */}
      </div>
    );
  }
}

export default SearchBar;
