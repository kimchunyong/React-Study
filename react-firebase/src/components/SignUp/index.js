import React, { Component } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import styled from 'styled-components';

const SignUpText = styled.p`
    color:#555;
`

const SignUpPage = () => (
    <div>
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    userName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const SignInfoForm = styled.form`
    display: flex;
    width: 100%;
    height: calc(100vh - 56px);
    flex-direction: column;
    text-align: center;
    margin:0 auto;
    justify-content: center;
    align-items: center;
`

const SinginInp = styled.input`
    max-width: 360px;
    width: 100%;
    margin: 10px 0 0 0;
    padding: 8px;
    outline-style: none;
    border: 1px solid #d9d9d9;
    border-radius: 15px;
    box-sizing: border-box;
`

const SinginBtn = styled.button`
    width: 100%;
    max-width: 360px;
    margin: 10px 0;
    padding: 8px 0;
    background: #6088ff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
`

class SignUpFormBase extends Component {

    constructor(props) {
        super(props);
    
        this.state = { ...INITIAL_STATE };
    }

    onClick = e => {
        const { 
            email, 
            passwordOne 
        } = this.state;


        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.SIGN_IN);
            })
            .catch(error => {
                this.setState({ error });
            });

        e.preventDefault();
    }

    onChange = e =>{
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const {
            userName,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;


        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || userName === '';

        return (
            <SignInfoForm >
                <h1>회원가입</h1>
                <SinginInp
                    name="userName"
                    value={userName}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <SinginInp
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <SinginInp
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <SinginInp
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <SinginBtn disabled={isInvalid} type="button" onClick={this.onClick}>Sign up</SinginBtn>

                {error && <p>{error.message}</p>}
            </SignInfoForm>
        );
    }
}

const SignUpLink = () => (
    <SignUpText>
      아직 회원가입을 안하셨나요? <NavLink to={ROUTES.SIGN_UP}>Sign Up</NavLink>
    </SignUpText>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export {SignUpForm, SignUpLink};