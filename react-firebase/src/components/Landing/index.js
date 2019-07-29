import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

import styled from 'styled-components';

import HipHop from './main_thums.png';

const LandingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 10%;
  flex-direction: column;
`

const LandingThums = styled.img`
  width:100%;
`

const StyledLink = styled(
  styled(NavLink)`
    display: inline-block;
    margin-top:30px;
    color: #fff;
    border: double 6px #55ffff;
    border-radius: 2em;
    background:#6088ff;
    &:hover {

    }
  `,
  'active'
)`
  padding:14px 20px;
  border:1px solid #fff;
  text-align:center;
  color: #fff;
`;

class LandingPage extends Component {

  componentDidMount() {
    this.props.firebase.doSignOut();
  }

  render() {
    return (
      <LandingWrap>
        <LandingThums src={HipHop} alt="HipHop" />
        <StyledLink activeClassName="active" to={ROUTES.SIGN_IN}>로그인 하러가기</StyledLink>
      </LandingWrap>
    );
  }
}

export default withFirebase(LandingPage);