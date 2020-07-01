import React from 'react';
import {connect} from 'react-redux';

import {
  HeaderContainer,
  LogoContainer,
  ImageContainer,
  NavigationContainer,
  LinkContainer
} from './header.styles';

import HomeLogo from '../../assets/images/favicon.png';
import { signoutUser } from '../../redux/users/users.actions';

const Header = ({dispatch}) => (
  <HeaderContainer>
    <LogoContainer to="/jobs">
      <ImageContainer alt="Home Logo" src={HomeLogo} />
    </LogoContainer>
    <NavigationContainer>
      <LinkContainer to="/profile">Profile</LinkContainer>
      <LinkContainer as="div" onClick={() => dispatch(signoutUser())}>Sign Out</LinkContainer>
    </NavigationContainer>
  </HeaderContainer>
);

export default connect()(Header);