import React, { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };
  render() {
    return (
      <div>
        {this.state.value}
        <input type="text" onChange={this._inpTxt} />
        <button type="button" onClick={this._setQuery}>
          검색
        </button>
      </div>
    );
  }

  _inpTxt = e => {
    this.setState({ value: e.target.value });
  };

  _setQuery = () => {
    this.props.query(this.state.value);
  };
}

export default Search;
