import styled from 'styled-components';

export const CategoryContainer = styled.div`
  width: 16%;

  @media (max-width: 800px) {
    width: 85%;
    margin: 0 auto 5px;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
  width: 100%;
  background-color: #808080;
  border-radius: 5px;
  padding: 7px;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;