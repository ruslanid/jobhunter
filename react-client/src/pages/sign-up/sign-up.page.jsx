import React, {useState} from 'react';

import {
  SignUpPageContainer,
  HomeLogoContainer,
  SignUpFormContainer,
  SignInLinkContainer
} from './sign-up.styles';

import HomeLogo from '../../assets/images/favicon.png';

import WelcomeHeader from '../../components/welcome-header/welcome-header.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const SignUpPage = () => {

  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const {
    firstName, lastName, email, password, confirmPassword
  } = userDetails;

  const handleSubmit = event => {
    event.preventDefault();
    const user = {...userDetails};
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
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          handleChange={handleChange}
        />
        <FormInput
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          handleChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          handleChange={handleChange}
        />
        <CustomButton type="submit">Sign up</CustomButton>
        <SignInLinkContainer to="/sign-in">Sign in</SignInLinkContainer>
      </SignUpFormContainer>
    </SignUpPageContainer>
  )
};

export default SignUpPage;