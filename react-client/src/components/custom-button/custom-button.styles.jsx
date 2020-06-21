import styled, {css} from 'styled-components';

const addJobWidth = css`
  width: 13%;
`;

const normalWidth = css`
  width: 80%;
`;

const setWidth = props => {
  if (props.addJob) {
    return addJobWidth;
  } else {
    return normalWidth;
  }
}

export const CustomButtonContainer = styled.button`
  ${setWidth}
  height: 40px;
  color: white;
  border: 1px solid white;
  font-size: 15px;
  cursor: pointer;
  border-radius: 5px;
  background-color: #CD403C;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 42px;
  }
`;