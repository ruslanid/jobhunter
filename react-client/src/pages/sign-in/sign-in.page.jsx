import React from 'react';

import {HomeLogoContainer} from './sign-in.styles';

import HomeLogo from '../../assets/images/favicon.png';
import WelcomeHeader from '../../components/welcome-header/welcome-header.component';

const SignInPage = () => (
  <div className="sign-in-page">
    <HomeLogoContainer alt="Home Logo" src={HomeLogo} />
    <WelcomeHeader />
  </div>
);

export default SignInPage;