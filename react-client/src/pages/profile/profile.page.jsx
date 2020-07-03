import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import MoonLoader from "react-spinners/MoonLoader";

import {
  ProfilePageContainer,
  ProfileHeaderContainer,
  UpdateProfileFormContainer,
  LoaderContainer,
  DeleteButtonsContainer
} from './profile.styles';

import BackToLink from '../../components/back-to-link/back-to-link.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
  selectCurrentUser,
  selectErrorsSaving,
  selectIsSaving,
  selectIsDeletingUser
} from '../../redux/users/users.selectors';
import { selectIsDeletingAllJobs } from '../../redux/jobs/jobs.selectors';
import { updateUser, deleteUser } from '../../redux/users/users.actions';
import { deleteAllJobs } from '../../redux/jobs/jobs.actions';

const ProfilePage = ({currentUser, dispatch, errors, history, isSaving, isDeletingAllJobs, isDeletingUser}) => {

  const {id, firstName, lastName, username} = currentUser;

  const [userDetails, setUserDetails] = useState({
    id, firstName, lastName, username
  });

  const handleSubmit = event => {
    event.preventDefault();
    const editedUser = {...userDetails};
    dispatch(updateUser(editedUser, history));
  };

  const handleChange = event => {
    const {name, value} = event.target;
    setUserDetails({...userDetails, [name]: value});
  };
  
  return (
    <ProfilePageContainer>
      <BackToLink to="/jobs" destination="Dashboard" />
      <UpdateProfileFormContainer onSubmit={handleSubmit}>
        <ProfileHeaderContainer>{firstName}'s Profile</ProfileHeaderContainer>
        <FormInput
          type="text"
          name="firstName"
          placeholder="First Name"
          value={userDetails.firstName}
          handleChange={handleChange}
          error={errors.firstName}
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userDetails.lastName}
          handleChange={handleChange}
          error={errors.lastName}
        />
        <FormInput
          type="text"
          name="username"
          placeholder="Email"
          value={userDetails.username}
          handleChange={handleChange}
          error={errors.username}
          disabled
        />
        {
          isSaving ?
          (<LoaderContainer>
            <MoonLoader size={30} color={"gray"} />
          </LoaderContainer>)
          :
          (<CustomButton type="submit">Save Profile</CustomButton>)
        }
      </UpdateProfileFormContainer>
      <DeleteButtonsContainer>
        {
          isDeletingAllJobs ?
          (<LoaderContainer>
            <MoonLoader size={30} color={"gray"} />
          </LoaderContainer>)
          :
          (<CustomButton
            onClick={() => dispatch(deleteAllJobs(history))}
            removeButton>
              Remove All Jobs
          </CustomButton>)
        }
        {
          isDeletingUser ?
          (<LoaderContainer>
            <MoonLoader size={30} color={"gray"} />
          </LoaderContainer>)
          :
          (<CustomButton
            onClick={() => dispatch(deleteUser(history))}
            removeButton>
              Delete My Profile
          </CustomButton>)
        }
      </DeleteButtonsContainer>
    </ProfilePageContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  errors: selectErrorsSaving,
  isSaving: selectIsSaving,
  isDeletingAllJobs: selectIsDeletingAllJobs,
  isDeletingUser: selectIsDeletingUser
});

export default connect(mapStateToProps)(withRouter(ProfilePage));