import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;