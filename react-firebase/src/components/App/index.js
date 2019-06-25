import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from '../Navigation';

import LandingPage from '../Landing';
import UpLoadPage from '../Upload';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import ListPage from '../list';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';


class App extends Component {
  state = {
    authUser: null,
    userMail: null,
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });

        authUser
          ? this.setState({ userMail: authUser.email })
          : this.setState({ userMail: null });
    });
  }

  render() {
    return (
      <Router isLogin={this.state.isLogin}>
        <Navigation authUser={this.state.authUser} />

        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.UPLOAD} component={UpLoadPage} />
        </Switch>
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.LIST} component={ListPage} />
      </Router>
    )
  }
}


export default withFirebase(App);