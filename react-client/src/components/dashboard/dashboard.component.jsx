import React from 'react';

import {DashboardContainer} from './dashboard.styles';

import JobCategory from '../job-category/job-category.component';

const Dashboard = () => {
  const state = {
    jobs: {
      "interested": [],
      "applied": [],
      "hot": [],
      "cold": [],
      "offer": [],
      "rejected": []
    }
  }

  const categories = ['Interested', 'Applied', 'Hot', 'Cold', 'Offer', 'Rejected'];

  const {jobs} = state;

  return (
    <DashboardContainer>
      {categories.map((category, index) => (
        <JobCategory key={index} title={category} jobs={jobs[category.toLowerCase()]} />

      ))}
    </DashboardContainer>
  )
};

export default Dashboard;