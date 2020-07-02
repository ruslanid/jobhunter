import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';

import {
  JobItemContainer,
  DetailsContainer,
  CompanyContainer,
  PositionContainer,
  LocationContainer,
  MoveContainer
} from './job-item.styles';

import UpdateJobCategory from '../update-job-category/update-job-category.component';

const JobItem = ({job, history, match}) => {

  const [updateJobCategoryHidden, setUpdateJobCategoryHidden] = useState(true);
  
  return (
    <JobItemContainer>
      <DetailsContainer onClick={() => history.push(`${match.url}/${job.id}`)}>
        <CompanyContainer>{job.company}</CompanyContainer>
        <PositionContainer>{job.position}</PositionContainer>
        <LocationContainer>{job.location}</LocationContainer>
      </DetailsContainer>
      {updateJobCategoryHidden ? null : <UpdateJobCategory job={job} />}
      <MoveContainer
        onClick={() => setUpdateJobCategoryHidden(!updateJobCategoryHidden)}
      >
        &lt; Move &gt;
      </MoveContainer>
    </JobItemContainer>
  )
};

export default withRouter(JobItem);