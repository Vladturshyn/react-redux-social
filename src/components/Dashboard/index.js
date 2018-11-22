import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteProfile } from '../../actions/profileActions';
import Speener from '../Common/Speener';
import ProfileActions from '../ProfileActions';
import Experience from '../Experience';
import Education from '../Education';

class Dashboard extends Component {

  componentDidMount(){
    this.props.getCurrentProfile();
  }
  onDeleteProfile = () =>{
    this.props.deleteProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContnt;
    if(profile === null || loading){
        dashboardContnt = <Speener />
    }else{
        // if user has profile
        if(Object.keys(profile).length > 0){
           dashboardContnt = (
              <div>
                <p>Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link></p>
                <ProfileActions />
                <Experience experience={profile.experience} />
                <Education education={profile.education} />
                <div style={{marginBottom:'60px'}}/>
                <button onClick={this.onDeleteProfile}>Delete My Account</button>
              </div>
              )
        }else{
          // if user logged in but has no profile
          dashboardContnt = (
            <div>
              <p>Welcome {user.name}</p>
              <p>You have not yet setup a profile, please add some info</p>
              <Link to="/create-profile"> Create Profile</Link>
            </div>
          )  
        }
    }
    return (
      <div className="dashboard">
        <div className="container">
          <h1>Dashboard</h1>
          {dashboardContnt}
        </div>
      </div>
    )
  }
}
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile, deleteProfile })(Dashboard);
