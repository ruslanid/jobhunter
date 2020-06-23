import styled from 'styled-components';

export const EditFormContainer = styled.form`
  width: 30%;
  margin: 40px auto 0;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const SelectContainer = styled.select`
  width: 100%;
  border: none;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const TextareaContainer = styled.textarea`
  height: auto;
  min-height: 150px;
  width: 100%;
  border: none;
  border: 1px solid gray;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  color: black;
  background-color: white;
  margin-bottom: 8px;
  resize: none;

  &:focus {
    outline: none;
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