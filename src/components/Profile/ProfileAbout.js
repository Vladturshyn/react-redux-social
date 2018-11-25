import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/isEmpty';

class ProfileAbout extends Component {
  render() {
      const {profile} = this.props;
      // get first name from profile.user
      const firstName = profile.user.name.trim().split(' ');
      
      // skills list
      const skills = profile.skills.map((skill,index)=>(
          <div key={index}>
            <i className="fa fa-check" />{skill}
          </div>
      ))
    return (
      <div>
       <h3>{firstName}'s Bio</h3>
       <p>{isEmpty(profile.bio) ? 
            (<span>{firstName} does not have bio</span>) : 
            (<span>{profile.bio}</span>)}</p>
       {skills}
      </div>
    )
  }
}
ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
}
export default ProfileAbout;