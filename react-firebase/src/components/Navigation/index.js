import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import styled from 'styled-components';

const TabMenu = styled.ul`
  display:table;
  width: 100%;
  padding:0;
`
const MenuList = styled.li`
  display:table-cell;
`

const StyledLink = styled(
  styled(Link)`
    color: palevioletred;
    display: block;
    font-family: Helvetica, Arial, sans-serif;

    &:hover {
      text-decoration: underline;
    }
  `,
  'active'
)`
  padding:8px 10px;
  border:1px solid #fff;
  text-align:center;
  color: #fff;
  background:#9c27b0;
`;

const Navigation = ({ authUser }) => (
  <div className="App">{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <TabMenu>
    <MenuList>
      <StyledLink to={ROUTES.LANDING}>Landing</StyledLink>
    </MenuList>
    <MenuList>
      <StyledLink to={ROUTES.HOME}>Home</StyledLink>
    </MenuList>
    <MenuList>
      <StyledLink to={ROUTES.ACCOUNT}>Account</StyledLink>
    </MenuList>
    <MenuList>
      <SignOutButton />
    </MenuList>
  </TabMenu>
);

const NavigationNonAuth = () => (
  <TabMenu>
    <MenuList>
      <StyledLink to={ROUTES.LANDING}>Landing</StyledLink>
    </MenuList>
    <MenuList>
      <StyledLink to={ROUTES.SIGN_IN}>Sign In</StyledLink>
    </MenuList>
  </TabMenu>
);

export default Navigation;