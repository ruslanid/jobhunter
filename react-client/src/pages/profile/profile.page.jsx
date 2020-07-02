import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {
  ProfileHeaderContainer,
  UpdateProfileFormContainer,
  DeleteButtonContainer
} from './profile.styles';

import BackToLink from '../../components/back-to-link/back-to-link.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectCurrentUser } from '../../redux/users/users.selectors';

const ProfilePage = ({currentUser}) => {

  const {id, firstName, lastName, username} = currentUser;

  const [userDetails, setUserDetails] = useState({
    id, firstName, lastName, username
  });

  const handleSubmit = event => {
    event.preventDefault();
    const editedUser = {...userDetails};
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
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userDetails.lastName}
          handleChange={handleChange}
        />
        <FormInput
          type="text"
          name="username"
          placeholder="Email"
          value={userDetails.username}
          handleChange={handleChange}
        />
        <CustomButton type="submit">Save Profile</CustomButton>
      </UpdateProfileFormContainer>
      <DeleteButtonContainer>
        <CustomButton type="submit" removeButton>Remove All Jobs</CustomButton>
        <CustomButton type="submit" removeButton>Delete My Profile</CustomButton>
      </DeleteButtonContainer>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ProfilePage);