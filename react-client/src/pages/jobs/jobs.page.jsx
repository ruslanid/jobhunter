import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import JobPage from '../../pages/job/job.page';

import Dashboard from '../../components/dashboard/dashboard.component';
import WithLoading from '../../components/with-loading/with-loading.component';

import { selectAreJobsLoaded } from '../../redux/jobs/jobs.selectors';
import { fetchJobs } from '../../redux/jobs/jobs.actions';

const DashboardWithLoading = WithLoading(Dashboard);

const JobsPage = ({areJobsLoaded, dispatch, match})  => {
  
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
    <div className="jobs-page">
      <Switch>
        <Route path={`${match.path}/:jobId`} component={JobPage} />
        <Route
          path={`${match.path}`}
          render={(props) => <DashboardWithLoading isLoading={!areJobsLoaded} {...props} />}
        />
      </Switch>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  areJobsLoaded: selectAreJobsLoaded
});

export default connect(mapStateToProps)(JobsPage);