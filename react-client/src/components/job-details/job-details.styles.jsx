import styled from 'styled-components';

export const JobDetailsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    width: 80%;
    margin-bottom: 40px;
  }
`;

export const JobFieldContainer = styled.div`
  width: 80%;
  background-color: #F9F9F9;
  border-radius: 7px;
  padding: 10px;
  color: gray;
  margin-top: 5px;
  border: 1px solid gray;
  font-size: 18px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const FieldNameContainer = styled.span`
  font-style: italic;
`;