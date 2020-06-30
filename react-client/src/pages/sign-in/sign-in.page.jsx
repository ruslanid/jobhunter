import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MoonLoader from "react-spinners/MoonLoader";

import {
  SignInPageContainer,
  HomeLogoContainer,
  SignInFormContainer,
  ErrorMessageContainer,
  LoaderContainer,
  SignUpLinkContainer
} from './sign-in.styles';

import HomeLogo from '../../assets/images/favicon.png';

import WelcomeHeader from '../../components/welcome-header/welcome-header.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {signinUser} from '../../redux/users/users.actions';
import {
  selectIsSigningIn,
  selectErrorsSigningIn
} from '../../redux/users/users.selectors';

const SignInPage = ({dispatch, history, isSigningIn, errors}) => {

  const [userDetails, setUserDetails] = useState({
    username: '',
    password: ''
  });

  const {username, password} = userDetails;

  const handleSubmit = event => {
    event.preventDefault();
    const user = {...userDetails};
    dispatch(signinUser(user, history));
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setUserDetails({...userDetails, [name]: value});
  };
  
  return (
    <SignInPageContainer>
      <HomeLogoContainer alt="Home Logo" src={HomeLogo} />
      <WelcomeHeader />
      <SignInFormContainer onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          placeholder="Email"
          value={username}
          handleChange={handleChange}
          error={errors.username}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          handleChange={handleChange}
          error={errors.password}
        />

        <ErrorMessageContainer>
          {errors.message}
        </ErrorMessageContainer>
        {
          isSigningIn ?
          (<LoaderContainer>
            <MoonLoader size={30} color={"gray"} />
          </LoaderContainer>)
          :
          (<CustomButton type="submit">Sign in</CustomButton>)
        }
        <SignUpLinkContainer to="/sign-up">Sign up</SignUpLinkContainer>
      </SignInFormContainer>
    </SignInPageContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  isSigningIn: selectIsSigningIn,
  errors: selectErrorsSigningIn
});

export default connect(mapStateToProps)(withRouter(SignInPage));