import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MoonLoader from "react-spinners/MoonLoader";

import {
  AddJobContainer,
  TitleContainer,
  AddFormContainer,
  LoaderContainer
} from './add-job.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {addJob} from '../../redux/jobs/jobs.actions';
import { 
  selectIsSaving,
  selectErrorsSaving
} from '../../redux/jobs/jobs.selectors';
import { selectCurrentUser } from '../../redux/users/users.selectors';

const AddJob = ({currentUser, isSaving, errors, dispatch}) => {

  const [jobDetails, setJobDetails] = useState({
    company: '',
    location: '',
    position: ''
  });

  const {company, location, position} = jobDetails;

  const handleSubmit = event => {
    event.preventDefault();
    const newJob = {...jobDetails};
    dispatch(addJob(newJob));
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setJobDetails({...jobDetails, [name]: value});
  };
  
  return (
    <AddJobContainer>
      <TitleContainer>
        Happy Job Hunting, {currentUser.firstName}.
      </TitleContainer>
      <AddFormContainer onSubmit={handleSubmit}>
        <FormInput
            type="text"
            name="company"
            placeholder="Company"
            value={company}
            handleChange={handleChange}
            error={errors.company}
            addJob
        />
        <FormInput
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            handleChange={handleChange}
            error={errors.location}
            addJob
        />
        <FormInput
            type="text"
            name="position"
            placeholder="Position"
            value={position}
            handleChange={handleChange}
            error={errors.position}
            addJob
        />
        {
          isSaving ?
          (<LoaderContainer>
            <MoonLoader size={30} color={"gray"} />
          </LoaderContainer>)
          :
          (<CustomButton type="submit" addJob>Add Job</CustomButton>)
        }
      </AddFormContainer>
    </AddJobContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  isSaving: selectIsSaving,
  errors: selectErrorsSaving,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(AddJob);