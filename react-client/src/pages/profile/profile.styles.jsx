import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  margin-bottom: 120px;
`;

export const UpdateProfileFormContainer = styled.form`
  width: 30%;
  margin: 40px auto 0;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const ProfileHeaderContainer = styled.h1`
  font-weight: 500;
  text-align: center;
  margin: 40px 0 40px;
  color: gray;

  @media (max-width: 800px) {
    width: 80%;
    margin: 40px auto 60px;
    font-size: 24px;
  }
`;

export const DeleteButtonsContainer = styled.div`
  width: 30%;
  margin: 0px auto;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const LoaderContainer = styled.div`
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;