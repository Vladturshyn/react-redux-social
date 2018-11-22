import React from 'react';
import { Link } from 'react-router-dom'; 

const ProfileActions = () => {
  return (
    <div>
      <Link to="/edit-profile"> Edit profile </Link>
      <Link to="/add-experience"> Add experience </Link>
      <Link to="/add-education"> Add education </Link>
    </div>
  )
}

export default ProfileActions;