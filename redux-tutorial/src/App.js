import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

 import { connect } from 'react-redux';

import { updateUser } from './actions/useAction';


class App extends Component {
  onUpdateUser = (event) =>{
    this.props.onUpdateUser(event.target.value);
  }
  render() {
    console.log(this.props);
    return (
        <div className="App">
          <input onChange={this.onUpdateUser} />
          {this.props.user}
        </div>
    );
  }
}

const mapStateToProps = state => (
  {
    prodcuts: state.products,
    user: state.user
  }
)

const mapActionsToProps = {
    onUpdateUser : updateUser
};


export default connect(mapStateToProps,mapActionsToProps)(App)
