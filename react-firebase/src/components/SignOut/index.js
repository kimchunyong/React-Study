import React,{Component} from 'react';

import { withRouter } from "react-router-dom";
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import styled from 'styled-components';

const Button = styled.button`
  background:#242a9c;
  color:#fff;
  border:none;
  cursor:pointer;
  padding:4px 8px;

  &:hover{
    background:#4a51dc;
  }
`

class SignOutButton extends Component {

  componentWillUnmount() {
    const loc = this.props.history;
    this.props.firebase.auth.onAuthStateChanged(authUser => {
      if(!authUser){
        loc.push(ROUTES.LANDING);
        localStorage.loggedIn = false;
      }
    })
  }

  logout = () =>{
    this.props.firebase.doSignOut();
  }

  

  render() {
      return (
        <Button type="button" onClick={this.logout}>
        로그아웃
      </Button>
      );
  }
}

export default withFirebase(withRouter(SignOutButton));