import React, {useState} from 'react';

import {
  SignInPageContainer,
  HomeLogoContainer,
  SignInFormContainer,
  SignUpLinkContainer
} from './sign-in.styles';

import HomeLogo from '../../assets/images/favicon.png';

import WelcomeHeader from '../../components/welcome-header/welcome-header.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const SignInPage = () => {

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: ''
  });

  const {email, password} = userDetails;

  const handleSubmit = event => {
    event.preventDefault();
    const user = {...userDetails};
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
        <CustomButton type="submit">Sign in</CustomButton>
        <SignUpLinkContainer to="/sign-up">Sign up</SignUpLinkContainer>
      </SignInFormContainer>
    </SignInPageContainer>
  )
};

export default SignInPage;