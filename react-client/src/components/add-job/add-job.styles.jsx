import styled from 'styled-components';

export const AddJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 0 auto 50px;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const TitleContainer = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  font-size: 30px;
  color: #808080;
  font-weight: lighter;

  @media (max-width: 800px) {
    font-size: 25px;
  }
`;

export const AddFormContainer = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LoaderContainer = styled.div`
  height: 40px;
  width: 8%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;