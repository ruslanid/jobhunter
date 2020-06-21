import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import WithLoading from '../../components/with-loading/with-loading.component';

import JobInfo from '../../components/job-info/job-info.component';

import { fetchJob } from '../../redux/jobs/jobs.actions';
import { selectIsJobLoaded } from '../../redux/jobs/jobs.selectors';

const JobInfoWithLoading = WithLoading(JobInfo);

const JobPage = ({dispatch, match, history, isJobLoaded}) => {

  useEffect(() => {
    dispatch(fetchJob(match.params.jobId, history));
  }, []);

  return (
    <div className="job-page">
      <JobInfoWithLoading isLoading={!isJobLoaded} />
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  isJobLoaded: selectIsJobLoaded
});

export default connect(mapStateToProps)(JobPage);