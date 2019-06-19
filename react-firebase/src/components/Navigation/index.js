import React from 'react';
import { NavLink  } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import styled from 'styled-components';

const TabMenu = styled.ul`
  display:table;
  width: 100%;
  padding: 8px 0;
  box-shadow: 0px 0px 4px;
`
const MenuList = styled.li`
  display:table-cell;
`

const MenuListActive = styled(MenuList)`
  text-align:center;
`

const StyledLink = styled(
  styled(NavLink)`
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
  color: #777;
`;

const Navigation = ({ authUser }) => (
  <div className="App">{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <TabMenu>
    <MenuList>
      <StyledLink activeClassName="active" exact to={ROUTES.LANDING}>Landing</StyledLink>
    </MenuList>
    <MenuList>
      <StyledLink activeClassName="active" to={ROUTES.HOME}>Home</StyledLink>
    </MenuList>
    <MenuList>
      <StyledLink activeClassName="active" to={ROUTES.ACCOUNT}>Account</StyledLink>
    </MenuList>
    <MenuListActive>
      <SignOutButton />
    </MenuListActive>
  </TabMenu>
);

const NavigationNonAuth = () => (
  <TabMenu>
    <MenuList>
      <StyledLink activeClassName="active" exact to={ROUTES.LANDING}>Landing</StyledLink>
    </MenuList>
    <MenuList>
      <StyledLink activeClassName="active" to={ROUTES.SIGN_IN}>로그인</StyledLink>
    </MenuList>
  </TabMenu>
);

export default Navigation;