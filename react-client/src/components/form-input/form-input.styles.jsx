import styled, {css} from 'styled-components';

const normalBorder = css`
  border: 1px solid gray;
`;

const errorBorder = css`
  border: 1px solid red;
`;

const setBorder = props => {
  if(!!props.error) {
    return errorBorder;
  } else {
    return normalBorder;
  }
}

export const FormInputWrapper = styled.div`
  width: 28%;
  margin: 0 3px;

  @media (max-width: 800px) {
    width: 100%;
    margin: 0 0 15px;
  }
`;

export const FormInputContainer = styled.input`
    width: 100%;
    border: none;
    border-radius: 5px;
    ${setBorder}
    background-color: white;
    font-size: 15px;
    padding: 10px;
    margin-bottom: 8px;

    &:focus {
        outline: none;
    }

    @media (max-width: 800px) {
      margin-bottom: 4px;
    }
`;

export const ErrorContainer = styled.div`
    color: red;
    font-size: 16px;
`;