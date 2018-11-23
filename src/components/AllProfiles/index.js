import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Speener from '../Common/Speener';
import { getProfiles } from '../../actions/profileActions';
import isEmpty from '../../validation/isEmpty';

export const ProfilesItem = ({profile}) =>{
    return(
        <div>
            <img src={profile.user.avatar} alt="avatar" />
            <div>
             <h3>{profile.user.name}</h3>
             <p>
                {profile.status} {isEmpty(profile.company) ? null : (<span>{profile.company}</span>)}
            </p>
            <p>
                {isEmpty(profile.location) ? null : (<span>{profile.location}</span>)}
            </p>
            <Link to={`/profile/${profile.handle}`}>
                View profile
            </Link>
            </div>
            <div>
                <h4>Skills set</h4>
                <ul>
                    {profile.skills.slice(0,4).map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
} 
ProfilesItem.propTypes = {
    profile: PropTypes.object.isRequired
}

class AllProfiles extends Component {
    componentDidMount(){
        this.props.getProfiles();
    }
  render() {
      const {loading,profiles} = this.props.profile;

      let proifileItems;
      if(profiles === null || loading){
          proifileItems = <Speener />;
      }else{
          if(profiles.length > 0){
              console.log(profiles);
              proifileItems = profiles.map(profile=><ProfilesItem key={profile._id} profile={profile}/>)
          }else{
              proifileItems = <h3>No profiles found...</h3>
          }
      }
    return (
      <div>
        <div>
            <h1>Developers profiles</h1>
        </div>
            {proifileItems}
      </div>
    )
  }
}
AllProfiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(AllProfiles)