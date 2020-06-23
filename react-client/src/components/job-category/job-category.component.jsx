import React from 'react';

import {
  CategoryContainer,
  TitleContainer
} from './job-category.styles';
import JobItem from '../job-item/job-item.component';

const JobCategory = ({title, jobs}) => (
  <CategoryContainer>
    <TitleContainer>{title}</TitleContainer>
    {jobs.map(job => (
      <JobItem key={job.id} job={job} />
    ))}
  </CategoryContainer>
);

export default JobCategory;