import React from 'react';
import PropTypes from 'prop-types';

const ProfileDetails = ({ name, email }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

ProfileDetails.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default ProfileDetails;
