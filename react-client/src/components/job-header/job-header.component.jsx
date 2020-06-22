import React from 'react';

import {
  JobHeaderContainer,
  CompanyNameContainer,
} from './job-header.styles';

const JobHeader = ({ job: { position, company, location } }) => (
  <JobHeaderContainer>
    {position} @ <CompanyNameContainer>{company}</CompanyNameContainer> in {location}
  </JobHeaderContainer>
);

export default JobHeader;