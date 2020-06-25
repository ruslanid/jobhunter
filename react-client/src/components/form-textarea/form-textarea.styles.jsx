import styled, {css} from 'styled-components';

const errorBorder = css`
  border: 1px solid red;
`;

const normalBorder = css`
  border: 1px solid #ccc;
`;

const setBorder = props => {
  if(!!props.error) {
    return errorBorder;
  } else {
    return normalBorder;
  }
}

export const FormTextareaWrapper = styled.div`
  margin: 0 0 15px;
`;

export const TextareaContainer = styled.textarea`
  ${setBorder}
  height: auto;
  min-height: 150px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  color: black;
  background-color: white;
  resize: none;
  margin-bottom: 8px;

  &:focus {
    outline: none;
  }
`;

export const ErrorContainer = styled.div`
  color: red;
  font-size: 16px;
`;