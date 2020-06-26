import React from 'react';

import {
  HeaderContainer,
  LogoContainer,
  ImageContainer,
  NavigationContainer,
  LinkContainer
} from './header.styles';

import HomeLogo from '../../assets/images/favicon.png';

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/jobs">
      <ImageContainer alt="Home Logo" src={HomeLogo} />
    </LogoContainer>
    <NavigationContainer>
      <LinkContainer to="/profile">Profile</LinkContainer>
      <LinkContainer as="div">Sign Out</LinkContainer>
    </NavigationContainer>
  </HeaderContainer>
);

export default Header;