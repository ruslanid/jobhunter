import React from 'react';
import {withRouter} from 'react-router-dom';

import {
  JobDetailsContainer,
  JobFieldsContainer,
  JobFieldContainer,
  FieldNameContainer
} from './job-details.styles';
import CustomButton from '../custom-button/custom-button.component';

const JobDetails = ({job, history, match}) => (
  <JobDetailsContainer>
    <JobFieldsContainer>
      <CustomButton onClick={() => history.push(`${match.url}/edit`)}>
        Edit Job
      </CustomButton>
      <JobFieldContainer>
        <FieldNameContainer>Category:</FieldNameContainer> &nbsp;{job.category}
      </JobFieldContainer>
      <JobFieldContainer>
        <FieldNameContainer>Link:</FieldNameContainer> &nbsp;{job.link}
      </JobFieldContainer>
      <JobFieldContainer>
        <FieldNameContainer>Contact Name:</FieldNameContainer> &nbsp;{job.manager}
      </JobFieldContainer>
      <JobFieldContainer>
        <FieldNameContainer>Contact Email:</FieldNameContainer> &nbsp;{job.email}
      </JobFieldContainer>
      <JobFieldContainer>
        <FieldNameContainer>Phone Number:</FieldNameContainer> &nbsp;{job.phoneNumber}
      </JobFieldContainer>
      <JobFieldContainer>
        <FieldNameContainer>Description:</FieldNameContainer> &nbsp;{job.description}
      </JobFieldContainer>
    </JobFieldsContainer>
  </JobDetailsContainer>
);

export default withRouter(JobDetails);