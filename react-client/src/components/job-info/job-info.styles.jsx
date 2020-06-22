import styled from 'styled-components';

export const JobAndNotesContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;