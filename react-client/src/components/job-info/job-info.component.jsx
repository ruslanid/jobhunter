import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { JobAndNotesContainer } from './job-info.styles';

import JobHeader from '../job-header/job-header.component';
import JobDetails from '../job-details/job-details.component';
import JobNotes from '../job-notes/job-notes.component';

import { selectJob } from '../../redux/jobs/jobs.selectors';

const JobInfo = ({job}) => (
  <div className="job-info">
    <JobHeader job={job} />
    <JobAndNotesContainer>
      <JobDetails job={job} />
      <JobNotes notes={job.notes} />
    </JobAndNotesContainer>
  </div>
);

const mapStateToProps = createStructuredSelector({
  job: selectJob
});

export default connect(mapStateToProps)(JobInfo);