import React from 'react';

import { withFirebase } from '../Firebase';

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

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut}>
    로그아웃
  </Button>
);

export default withFirebase(SignOutButton);