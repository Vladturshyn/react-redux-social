import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
 
import ProfileHeader from './ProfileHeader';
import ProfileAbout from './ProfileAbout';
import ProfileGitHub from './ProfileGitHub';
import ProfileCreads from './ProfileCreads';
import Speener from '../Common/Speener';

import {getProfileByHandle} from '../../actions/profileActions';

class Profile extends Component {
    componentDidMount(){
        if(this.props.match.params.handle){
            this.props.getProfileByHandle(this.props.match.params.handle)
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.profile.profile === null && this.props.profile.loading){
            this.props.history.push("/not-found")
        }

    }
  render() {
      const {profile, loading} = this.props.profile;
      let profileContent;
      if(profile === null || loading){
          profileContent = <Speener />
      }else{
          profileContent = (
              <div>
                <div>
                    <Link to="/profiles">Back to Profiles</Link>
                </div>
                <ProfileHeader profile={profile} />
                <ProfileAbout profile={profile} />
                <ProfileCreads education={profile.education} experience={profile.experience}/> 
                {profile.githubusername ? <ProfileGitHub username={profile.githubusername}/> : null}
              </div>
          )
      }
    return (
      <div>
        {profileContent}
      </div>
    )
  }
}

Profile.propTypes = {
    profile: PropTypes.object.isRequired,
    getProfileByHandle: PropTypes.func.isRequired
}

const mapStateToProps = (state) =>({
    profile: state.profile
})

export default connect(mapStateToProps,{getProfileByHandle})(Profile);