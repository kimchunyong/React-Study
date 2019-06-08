import React, { Component } from 'react';

import { connect } from 'react-redux';

import './TextResult.css';

class TextResult extends Component {
  render() {
    return (
      <div className="text__result-area">
        <div>{this.props.text}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    text: state.keyboardReducer.text,
  };
};

export default connect(mapStateToProps)(TextResult);
