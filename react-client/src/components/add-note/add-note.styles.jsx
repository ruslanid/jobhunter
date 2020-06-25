import styled from 'styled-components';

export const AddNoteFormContainer = styled.form`
  width: 65%;
  margin-bottom: 15px;

  & > input {
    border: 1px solid #ccc;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ActionButtonContainer = styled.button`
  width: 49%;
  height: 40px;
  border: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;

export const LoaderContainer = styled.div`
  height: 40px;
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
