import React from 'react';
import AddJob from '../../components/add-job/add-job.components';
import Dashboard from '../../components/dashboard/dashboard.component';

const JobsPage = ()  => (
  <div className="jobs-page">
    <AddJob />
    <Dashboard />
  </div>
);

export default JobsPage;