import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TextArea.css';

class TextArea extends Component {
  handleChange(event) {
    this.props.textKeyDown(event.target.value);
  }
  render() {
    return (
      <div className="text__inp-area">
        <textarea onChange={event => this.handleChange(event)} placeholder="번역할 내용을 입력해주세요." />
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
