import styled from 'styled-components';

export const CompanyNameContainer = styled.span`
  font-style: italic;
`;

export const JobHeaderContainer = styled.h1`
  font-weight: 500;
  text-align: center;
  margin: 40px 0 60px;
  color: gray;

  @media (max-width: 800px) {
    width: 80%;
    margin: 40px auto 60px;
    font-size: 24px;
  }
`;