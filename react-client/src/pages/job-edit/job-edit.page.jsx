import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MoonLoader from "react-spinners/MoonLoader";

import {
  EditFormContainer,
  SelectContainer,
  LoaderContainer,
  DeleteButtonContainer
} from './job-edit.styles';

import BackToLink from '../../components/back-to-link/back-to-link.component';
import JobHeader from '../../components/job-header/job-header.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';
import FormTextarea from '../../components/form-textarea/form-textarea.component';

import {
  selectJob,
  selectIsSaving,
  selectErrorsSaving,
  selectIsDeleting
} from '../../redux/jobs/jobs.selectors';

import { updateJob, deleteJob } from '../../redux/jobs/jobs.actions';

const JobEditPage = ({job, isSaving, errors, isDeleting, dispatch, history}) => {

  const {
    id, category, company, position, location, link, manager, email, phoneNumber, description
  } = job;

  const [jobDetails, setJobDetails] = useState({
    id, category, company, position, location, link, manager, email, phoneNumber, description
  });

  const handleSubmit = event => {
    event.preventDefault();
    const editedJob = {...jobDetails};
    dispatch(updateJob(editedJob, history));
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setJobDetails({...jobDetails, [name]: value});
  };

  const categories = [
    "Interested", "Applied", "Hot", "Cold", "Offer", "Rejected"
  ];
  
  return (
    <div className="job-edit-page">
      <BackToLink to={`/jobs/${job.id}`} destination="Job" />
      <JobHeader job={job} />
      <EditFormContainer onSubmit={handleSubmit}>
        <SelectContainer name="category" value={jobDetails.category} onChange={handleChange}>
          {categories.map((category, index) => 
            <option key={index} value={category}>{category}</option>
          )}
        </SelectContainer>

        <FormInput
          type="text"
          name="company"
          placeholder="Company"
          value={jobDetails.company || ''}
          handleChange={handleChange}
          error={errors.company}
        />

        <FormInput
          type="text"
          name="position"
          placeholder="Position"
          value={jobDetails.position  || ''}
          handleChange={handleChange}
          error={errors.position}
        />

        <FormInput
          type="text"
          name="location"
          placeholder="Location"
          value={jobDetails.location  || ''}
          handleChange={handleChange}
          error={errors.location}
        />

        <FormInput
          type="text"
          name="link"
          placeholder="Link"
          value={jobDetails.link  || ''}
          handleChange={handleChange}
        />

        <FormInput
          type="text"
          name="manager"
          placeholder="Contact Name"
          value={jobDetails.manager  || ''}
          handleChange={handleChange}
        />

        <FormInput
          type="text"
          name="email"
          placeholder="Contact Email"
          value={jobDetails.email  || ''}
          handleChange={handleChange}
        />

        <FormInput
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={jobDetails.phoneNumber  || ''}
          handleChange={handleChange}
        />

        <FormTextarea
          name="description"
          placeholder="Description"
          value={jobDetails.description  || ''}
          onChange={handleChange}
          maxLength={254}
        />

        {
          isSaving ?
          (<LoaderContainer>
            <MoonLoader size={30} color={"gray"} />
          </LoaderContainer>)
          :
          (<CustomButton type="submit">Save Job</CustomButton>)
        }
      </EditFormContainer>
      {
        isDeleting ?
        (<LoaderContainer>
          <MoonLoader size={30} color={"gray"} />
        </LoaderContainer>)
        :
        (<DeleteButtonContainer>
          <CustomButton onClick={() => dispatch(deleteJob(jobDetails.id, history))} removeButton>Delete Job</CustomButton>
        </DeleteButtonContainer>)
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  job: selectJob,
  isSaving: selectIsSaving,
  errors: selectErrorsSaving,
  isDeleting: selectIsDeleting
});

export default connect(mapStateToProps)(JobEditPage);