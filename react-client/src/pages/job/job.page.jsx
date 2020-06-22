import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import WithLoading from '../../components/with-loading/with-loading.component';

import JobInfo from '../../components/job-info/job-info.component';
import JobEdit from '../../pages/job-edit/job-edit.page';

import { fetchJob } from '../../redux/jobs/jobs.actions';
import { selectIsJobLoaded } from '../../redux/jobs/jobs.selectors';

const JobInfoWithLoading = WithLoading(JobInfo);
const JobEditWithLoading = WithLoading(JobEdit);

const JobPage = ({dispatch, match, history, isJobLoaded}) => {

  useEffect(() => {
    dispatch(fetchJob(match.params.jobId, history));
  }, []);

  return (
    <div className="job-page">
      <Switch>
        <Route
          path={`${match.path}/edit`}
          render={(props) => <JobEditWithLoading isLoading={!isJobLoaded} {...props} />}
        />
        <Route
          path={`${match.path}`}
          render={(props) => <JobInfoWithLoading isLoading={!isJobLoaded} {...props} />}
        />
      </Switch>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  isJobLoaded: selectIsJobLoaded
});

export default connect(mapStateToProps)(JobPage);