import React from 'react';

import {
  WelcomHeaderContainer,
  BackgroundImageContainer,
  ImageOverlayContainer,
  TitleContainer
} from './welcome-header.styles';

import WelcomeImage from '../../assets/images/banner.jpg';

const WelcomeHeader = () => (
  <WelcomHeaderContainer>
    <BackgroundImageContainer style={{ backgroundImage: `url(${WelcomeImage})`}} />
    <ImageOverlayContainer />
    <TitleContainer>
      The simple and visual way to organize the job hunting process.
    </TitleContainer>
  </WelcomHeaderContainer>
);

export default WelcomeHeader;