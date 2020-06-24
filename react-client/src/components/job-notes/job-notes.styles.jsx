import styled from 'styled-components';

export const JobNotesContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const AddNoteButtonContainer = styled.div`
  width: 65%;

  @media (max-width: 800px) {
    width: 80%;
  }
`;