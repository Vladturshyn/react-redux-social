import React, { Component } from 'react';
import isEmpty from '../../validation/isEmpty';

class ProfileHeader extends Component {
  render() {
      const {profile} = this.props;
    return (
      <div>
        <img src={profile.user.avatar} alt="avatar" />
        <div>
            <h3>{profile.user.name}</h3>
            <p> {profile.status}
                {isEmpty(profile.company) ? null : (<span>{profile.company}</span>)}
            </p>
            <p>{isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}</p>
            {isEmpty(profile.website) ? null : 
                (<a href={profile.website} target="_blank" rel="noopener noreferrer"> 
                    <i className="fas fa-globe fa-2x"/>
                </a>)}
            {isEmpty(profile.social && profile.social.twitter) ? null : 
                (<a href={profile.social.twitter} target="_blank"> 
                    1<i className="fas fa-twitter fa-2x"/>
                </a>)}
            {isEmpty(profile.social && profile.social.facebook) ? null : 
                (<a href={profile.social.facebook} target="_blank" > 
                    2<i className="fas fa-facebook fa-2x"/>
                </a>)}
            {isEmpty(profile.social && profile.social.linkedin) ? null : 
                (<a href={profile.social.linkedin} target="_blank"> 
                    3<i className="fas fa-linkedin fa-2x"/>
                </a>)}
            {isEmpty(profile.social && profile.social.youtube) ? null : 
                (<a href={profile.social.youtube} target="_blank" > 
                    4<i className="fas fa-youtube fa-2x"/>
                </a>)}
             {isEmpty(profile.social && profile.social.instagram) ? null : 
                (<a href={profile.social.instagram} target="_blank" > 
                    5<i className="fas fa-instagram fa-2x"/>
                </a>)}
        </div>
      </div>
    )
  }
}
export default ProfileHeader;