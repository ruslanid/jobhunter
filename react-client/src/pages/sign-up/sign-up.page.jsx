import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MoonLoader from "react-spinners/MoonLoader";

import {
  SignUpPageContainer,
  HomeLogoContainer,
  SignUpFormContainer,
  ErrorMessageContainer,
  LoaderContainer,
  SignInLinkContainer
} from './sign-up.styles';

import HomeLogo from '../../assets/images/favicon.png';

import WelcomeHeader from '../../components/welcome-header/welcome-header.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {signupUser} from '../../redux/users/users.actions';
import {
  selectIsSaving,
  selectErrorsSaving
} from '../../redux/users/users.selectors';

const SignUpPage = ({dispatch, history, isSaving, errors}) => {

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const {
    firstName, lastName, username, password, confirmPassword
  } = userDetails;

  const handleSubmit = event => {
    event.preventDefault();
    const newUser = {...userDetails};
    dispatch(signupUser(newUser, history));
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setUserDetails({...userDetails, [name]: value});
  };
  
  return (
    <SignUpPageContainer>
      <HomeLogoContainer alt="Home Logo" src={HomeLogo} />
      <WelcomeHeader />
      <SignUpFormContainer onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          handleChange={handleChange}
          error={errors.firstName}
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          handleChange={handleChange}
          error={errors.lastName}
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
          error={errors.confirmPassword}
        />

        <ErrorMessageContainer>
          {errors.message}
        </ErrorMessageContainer>

        {
          isSaving ?
          (<LoaderContainer>
            <MoonLoader size={30} color={"gray"} />
          </LoaderContainer>)
          :
          (<CustomButton type="submit">Sign up</CustomButton>)
        }
        <SignInLinkContainer to="/sign-in">Sign in</SignInLinkContainer>
      </SignUpFormContainer>
    </SignUpPageContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  isSaving: selectIsSaving,
  errors: selectErrorsSaving
});

export default connect(mapStateToProps)(withRouter(SignUpPage));