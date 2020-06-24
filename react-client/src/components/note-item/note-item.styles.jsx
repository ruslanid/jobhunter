import styled from 'styled-components';

export const NoteItemContainer = styled.div`
  width: 65%;
  background-color: #F9F9F9;
  color: gray;
  border: none;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2px 10px;
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const TitleContainer = styled.p`
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
`;

export const TextContainer = styled.p`
  font-size: 16px;
`;

export const UpdatedDateContainer = styled.p`
  text-align: right;
`;