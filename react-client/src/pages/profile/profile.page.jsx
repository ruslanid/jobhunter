import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  ProfileHeaderContainer,
  UpdateProfileFormContainer,
  DeleteButtonsContainer
} from './profile.styles';

import BackToLink from '../../components/back-to-link/back-to-link.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectCurrentUser, selectErrorsSaving } from '../../redux/users/users.selectors';
import { updateUser } from '../../redux/users/users.actions';

const ProfilePage = ({currentUser, dispatch, errors, history}) => {

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
    <div className="profile-page">
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
        <CustomButton type="submit">Save Profile</CustomButton>
      </UpdateProfileFormContainer>
      <DeleteButtonsContainer>
        <CustomButton type="submit" removeButton>Remove All Jobs</CustomButton>
        <CustomButton type="submit" removeButton>Delete My Profile</CustomButton>
      </DeleteButtonsContainer>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  errors: selectErrorsSaving
});

export default connect(mapStateToProps)(withRouter(ProfilePage));