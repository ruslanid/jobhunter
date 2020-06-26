import styled from 'styled-components';

export const WelcomHeaderContainer = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
	align-items: center;
  justify-content: center;
`;

export const BackgroundImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageOverlayContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  background-color: black;
  opacity: 0.8;
`;

export const TitleContainer = styled.div`
  position: absolute;
  color: white;
  font-size: 50px;
  width: 55%;
  text-align: center;

  @media (max-width: 800px) {
    width: 70%;
    font-size: 30px;
  }
`;