import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: black;
  height: 75px;
  margin: 0 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  height: 40px;
  width: 40px;
  margin: 20px;
`;

export const ImageContainer = styled.img`
  height: 100%;
  width: 100%;
`;

export const LinkContainer = styled(Link)`
  color: gray;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: #ea4644;
    opacity: 0.7;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px;
  width: 180px;
`;