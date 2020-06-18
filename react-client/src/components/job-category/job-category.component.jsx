import React from 'react';

import {
  CategoryContainer,
  TitleContainer
} from './job-category.styles';

const JobCategory = (props) =>{

  const {title, jobs} = props;

  console.log(jobs);
  
  return (
    <CategoryContainer>
      <TitleContainer>{title}</TitleContainer>
      {jobs.map(job => (
        <div>{job.position}</div>
      ))}
    </CategoryContainer>
  )
};

export default JobCategory;