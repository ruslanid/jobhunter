import styled from 'styled-components';

export const UpdateNoteFormContainer = styled.form`
  width: 30%;
  margin: 40px auto 0;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const CreatedDateContainer = styled.p`
  width: 100%;
  text-align: center;
  font-style: italic;
`;

export const CreatedLabelContainer = styled.span`
  font-weight: bold;
`;

export const LoaderContainer = styled.div`
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteButtonContainer = styled.div`
  width: 30%;
  margin: 0px auto 60px;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;