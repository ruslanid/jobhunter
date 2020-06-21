import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  JobHeaderContainer,
  CompanyNameContainer,
  JobAndNotesContainer
} from './job-info.styles';

import JobDetails from '../job-details/job-details.component';
import JobNotes from '../job-notes/job-notes.component';

import { selectJob } from '../../redux/jobs/jobs.selectors';

const JobInfo = ({job}) => {
  const {position, company, location} = job;

  return (
    <div className="job-info">
      <JobHeaderContainer>
        {position} @ <CompanyNameContainer>{company}</CompanyNameContainer> in {location}
      </JobHeaderContainer>
      <JobAndNotesContainer>
        <JobDetails job={job} />
        <JobNotes />
      </JobAndNotesContainer>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  job: selectJob
});

export default connect(mapStateToProps)(JobInfo);