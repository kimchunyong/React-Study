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
        <h1>SignUp</h1>
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
                this.props.history.push(ROUTES.LANDING);
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
            <form >
                <input
                    name="userName"
                    value={userName}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="button" onClick={this.onClick}>Sign up</button>

                {error && <p>{error.message}</p>}
            </form>
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