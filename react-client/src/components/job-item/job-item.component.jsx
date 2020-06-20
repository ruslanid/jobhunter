import React from 'react';

import {
  JobItemContainer,
  CompanyContainer,
  PositionContainer,
  LocationContainer
} from './job-item.styles';

const JobItem = ({job}) => (
  <JobItemContainer>
    <CompanyContainer>{job.company}</CompanyContainer>
    <PositionContainer>{job.position}</PositionContainer>
    <LocationContainer>{job.location}</LocationContainer>
  </JobItemContainer>
);

export default JobItem;