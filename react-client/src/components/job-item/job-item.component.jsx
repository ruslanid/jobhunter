import React from 'react';
import {withRouter} from 'react-router-dom';

import {
  JobItemContainer,
  CompanyContainer,
  PositionContainer,
  LocationContainer
} from './job-item.styles';

const JobItem = ({job, history, match}) => (
  <JobItemContainer onClick={() => history.push(`${match.url}/${job.id}`)}>
    <CompanyContainer>{job.company}</CompanyContainer>
    <PositionContainer>{job.position}</PositionContainer>
    <LocationContainer>{job.location}</LocationContainer>
  </JobItemContainer>
);

export default withRouter(JobItem);