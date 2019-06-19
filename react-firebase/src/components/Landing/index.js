import React from 'react';

import { NavLink  } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import styled from 'styled-components';

const StyledLink = styled(
  styled(NavLink)`
    display: block;

    &:hover {
      text-decoration: underline;
    }
  `,
  'active'
)`
  padding:14px 10px;
  border:1px solid #fff;
  text-align:center;
  color: #777;
`;

const LandingPage = () => (

    <StyledLink activeClassName="active" to={ROUTES.SIGN_IN}>로그인</StyledLink>
);

export default LandingPage;