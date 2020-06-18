import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  width: 13%;
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