import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import styled from 'styled-components';

const LoginWrap = styled.div`
  display: flex;
  height: calc(100vh - 56px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const LoginTitle = styled.h1`
  margin:10px 0;
  font-size:22px;
`

const FormWrap = styled.form`
  display: flex;
  width: 100%;
  max-width: 360px;
  flex-direction: column;
  text-align: center;
`

const FormInput = styled.input`
  margin:10px 0 0 0;
  padding:8px;
  outline-style:none;
  border:1px solid #d9d9d9;
  border-radius:15px;
  box-sizing:border-box;

  &:focus{
    border:1px solid blue;
  }
`

const FormBtn = styled.button`
  margin:10px 0;
  padding:8px 0;
  background:#6088ff;
  color:#fff;
  font-size:16px;
  cursor:pointer;
`

const CautionText = styled.p`
  color:red;
  margin:5px 0;
  font-size:12px;
  line-height: 16px;
`

const SignInPage = () => (
  <LoginWrap className="login__wrap">
    <LoginTitle>Login</LoginTitle>
    <SignInForm />
    <SignUpLink />
  </LoginWrap>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.UPLOAD);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <FormWrap onSubmit={this.onSubmit}>
        <FormInput
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="이메일 주소를 입력해 주세요."
        />
        <FormInput
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="비밀번호를 입력해 주세요."
        />
        <FormBtn disabled={isInvalid} type="submit">
          로그인
        </FormBtn>

        {error && <CautionText>{`아이디 또는 비밀번호를 다시 확인하세요.`}<br />{`등록되지 않은 아이디이거나, 아이디 또는 비밀번호를 잘못 입력하셨습니다.`}</CautionText>}
      </FormWrap>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };