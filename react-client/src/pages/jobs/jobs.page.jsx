import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import AddJob from '../../components/add-job/add-job.component';
import Dashboard from '../../components/dashboard/dashboard.component';
import WithLoading from '../../components/with-loading/with-loading.component';

import { selectAreJobsLoaded } from '../../redux/jobs/jobs.selectors';
import { fetchJobs } from '../../redux/jobs/jobs.actions';

const DashboardWithLoading = WithLoading(Dashboard);

const JobsPage = ({areJobsLoaded, dispatch})  => {
  
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  return (
  <div className="jobs-page">
    <AddJob />
    <DashboardWithLoading isLoading={!areJobsLoaded} />
  </div>
)};

const mapStateToProps = createStructuredSelector({
  areJobsLoaded: selectAreJobsLoaded
});

export default connect(mapStateToProps)(JobsPage);