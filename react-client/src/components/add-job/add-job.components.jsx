import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  AddJobContainer,
  TitleContainer,
  AddFormContainer
} from './add-job.styles';

const AddJob = () => {

  const [jobDetails, setJobDetails] = useState({
    company: '',
    location: '',
    position: ''
  });

  const {company, location, position} = jobDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setJobDetails({...jobDetails, [name]: value});
  };
  
  return (
    <AddJobContainer>
      <TitleContainer>
        Happy Job Hunting, #name.
      </TitleContainer>
        <AddFormContainer onSubmit={handleSubmit}>
          <FormInput
              type="text"
              name="company"
              placeholder="Company"
              value={company}
              handleChange={handleChange}
              required
          />
          <FormInput
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              handleChange={handleChange}
              required
          />
          <FormInput
              type="text"
              name="position"
              placeholder="Position"
              value={position}
              handleChange={handleChange}
              required
          />

          <CustomButton type="submit">Add Job</CustomButton>             

        </AddFormContainer>
    </AddJobContainer>
  )
};

export default AddJob;