import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import TextFieldGroup from '../../Common/TextFieldGroup';

class CreateProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            tweeter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        }
    }
  render() {
    return (
      <div>
       <div>
            <h1>Create Your profile</h1>
            <p>Let's some information to make your profile send out</p>
            <small>* = required fields</small>
       </div>
      </div>
    )
  }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors
})


export default connect(mapStateToProps)(CreateProfile)
