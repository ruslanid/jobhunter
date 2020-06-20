import React from 'react';

import {
  CategoryContainer,
  TitleContainer
} from './job-category.styles';
import JobItem from '../job-item/job-item.component';

const JobCategory = (props) =>{
  const {title, jobs} = props;
  
  return (
    <CategoryContainer>
      <TitleContainer>{title}</TitleContainer>
      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </CategoryContainer>
  )
};

export default JobCategory;