import styled from 'styled-components';

export const FormInputWrapper = styled.div`
  width: 28%;
  margin: 0 3px;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0 0;
  }
`;

export const FormInputContainer = styled.input`
    width: 100%;
    border: none;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: white;
    font-size: 15px;
    padding: 10px;

    &:focus {
        outline: none;
    }

    @media (max-width: 800px) {
      margin-bottom: 8px;
    }
`;