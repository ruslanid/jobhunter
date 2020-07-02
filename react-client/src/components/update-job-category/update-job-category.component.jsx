import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MoonLoader from "react-spinners/MoonLoader";

import {
  UpdateJobCategoryFormContainer,
  SelectContainer,
  LoaderContainer
} from './update-job-category.styles';

import CustomButton from '../../components/custom-button/custom-button.component';

import { updateJob } from '../../redux/jobs/jobs.actions';
import { selectIsSaving } from '../../redux/jobs/jobs.selectors';

const UpdateJobCategory = ({job, dispatch, isSaving}) => {

  const {category} = job;

  const [jobCategory, setJobCategory] = useState({category});

  const handleSubmit = event => {
    event.preventDefault();
    const editedJob = {...job, category: jobCategory.category};
    dispatch(updateJob(editedJob));
  };
  
  const handleChange = event => {
    const {name, value} = event.target;
    setJobCategory({...jobCategory, [name]: value});
  };

  const categories = [
    "Interested", "Applied", "Hot", "Cold", "Offer", "Rejected"
  ];

  return (
    <UpdateJobCategoryFormContainer onSubmit={handleSubmit}>
      <SelectContainer name="category" value={jobCategory.category} onChange={handleChange}>
        {categories.map((category, index) => 
          <option key={index} value={category}>{category}</option>
        )}
      </SelectContainer>
      {
        isSaving ?
        (<LoaderContainer>
          <MoonLoader size={30} color={"gray"} />
        </LoaderContainer>)
        :
        (<CustomButton type="submit">Save</CustomButton>)
      }
    </UpdateJobCategoryFormContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  isSaving: selectIsSaving
});

export default connect(mapStateToProps)(UpdateJobCategory);