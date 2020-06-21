import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {DashboardContainer} from './dashboard.styles';

import AddJob from '../../components/add-job/add-job.component';
import JobCategory from '../job-category/job-category.component';

import { selectAllJobs } from '../../redux/jobs/jobs.selectors';

const Dashboard = ({jobs}) => {
  const categories = ['Interested', 'Applied', 'Hot', 'Cold', 'Offer', 'Rejected'];

  return (
    <div className="dashboard">
      <AddJob />
      <DashboardContainer>
        {categories.map((category, index) => (
          <JobCategory key={index} title={category} jobs={jobs[category]} />
        ))}
      </DashboardContainer>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  jobs: selectAllJobs
});

export default connect(mapStateToProps)(Dashboard);