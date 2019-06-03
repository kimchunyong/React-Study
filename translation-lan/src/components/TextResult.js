import React, { Component } from 'react';

import { connect } from 'react-redux';

class TextResult extends Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

const mapStateToProps = state => {
  return {
    text: state.keyboardReducer.text,
  };
};

export default connect(mapStateToProps)(TextResult);
