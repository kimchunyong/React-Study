import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class TextArea extends Component {
  handleChange(event) {
    this.props.textKeyDown(event.target.value);
  }
  render() {
    return (
      <div>
        <textarea onChange={event => this.handleChange(event)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.keyboardReducer.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    textKeyDown: inptxt => {
      dispatch({ type: 'KEYBOARD_TEXT', text: inptxt });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextArea);
