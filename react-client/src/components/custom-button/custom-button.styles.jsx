import styled, {css} from 'styled-components';

const addJobWidth = css`
  width: 13%;
`;

const normalWidth = css`
  width: 100%;
`;

const setWidth = props => {
  if (props.addJob) {
    return addJobWidth;
  } else {
    return normalWidth;
  }
}

const removeColor = css`
  color: black;
  background-color: white;
  border: 1px solid #a94442;

  &:hover {
    background-color: #dee0e2;
  }
`;

const normalColor = css`
  color: white;
  background-color: #CD403C;
  border: 1px solid white;

  &:hover {
    opacity: 1;
  }

`;

const setColor = props => {
  if (props.removeButton) {
    return removeColor;
  } else {
    return normalColor;
  }
};

export const CustomButtonContainer = styled.button`
  ${setWidth}
  ${setColor}
  height: 40px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;
  opacity: 0.9;
  margin-bottom: 5px;

  @media (max-width: 800px) {
    width: 100%;
    height: 42px;
  }
`;