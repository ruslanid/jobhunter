export const updateCurrentUser = (user, currentUser) => {
  if (currentUser) {
    const {firstName, lastName, username} = user;
    return {...currentUser, firstName, lastName, username};
  }

  return null;
};