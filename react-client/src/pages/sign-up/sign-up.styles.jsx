import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const SignUpPageContainer = styled.div`
  margin-bottom: 120px;
`;

export const HomeLogoContainer = styled.img`
  position: absolute;
  height: 40px;
  width: 40px;
  margin: 20px 30px;
  z-index: 1;
`;

export const SignUpFormContainer = styled.form`
  width: 20%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 70%;
  }
`;

export const SignInLinkContainer = styled(Link)`
  color: gray;
  font-size: 14px;
`;