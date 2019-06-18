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
  background:#9c27b0;
`

const Navigation = ({ authUser }) => (
  <div className="App">{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <TabMenu>
    <MenuList>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </MenuList>
    <MenuList>
      <Link to={ROUTES.HOME}>Home</Link>
    </MenuList>
    <MenuList>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </MenuList>
    <MenuList>
      <SignOutButton />
    </MenuList>
  </TabMenu>
);

const NavigationNonAuth = () => (
  <TabMenu>
    <MenuList>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </MenuList>
    <MenuList>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </MenuList>
  </TabMenu>
);

export default Navigation;