import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {DashboardContainer} from './dashboard.styles';

import JobCategory from '../job-category/job-category.component';

import { selectAllJobs } from '../../redux/jobs/jobs.selectors';

const Dashboard = ({jobs}) => {
  console.log("here-0-------------");

  const categories = ['Interested', 'Applied', 'Hot', 'Cold', 'Offer', 'Rejected'];

  return (
    <DashboardContainer>
      {categories.map((category, index) => (
        <JobCategory key={index} title={category} jobs={jobs[category.toLowerCase()]} />
      ))}
    </DashboardContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  jobs: selectAllJobs
});

export default connect(mapStateToProps)(Dashboard);