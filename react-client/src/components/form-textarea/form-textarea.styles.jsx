import styled, {css} from 'styled-components';

const errorBorder = css`
  border: 1px solid red;
`;

const addNoteBorder = css`
  border: 1px solid #ccc;
`;

const regularBorder = css`
  border: 1px solid gray;
`;

const setBorder = props => {
  if(!!props.error) {
    return errorBorder;
  } else if (props.addNote) {
    return addNoteBorder;
  } else {
    return regularBorder;
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