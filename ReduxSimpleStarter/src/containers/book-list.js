import React, { Component } from 'react';
import { connect } from 'react-redux';

import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li 
          key={book.title} 
          className="list-group-item"
          onClick={()=> this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}

//store에 state연결하기
function mapSateToProps(state) {
  return {
    books: state.books,
  };
}

//액션생성자 연결하기
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapSateToProps,mapDispatchToProps)(BookList);
