import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../Common/TextFieldGroup';
import InputGroup from '../Common/InputGroup';
import SelectListGroup from '../Common/SelectListGroup';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';

import isEmpty from '../../validation/isEmpty';

import { createProfile, getCurrentProfile } from '../../actions/profileActions';


class EditProfile extends Component {
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
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        }
    }
    componentDidMount(){
        this.props.getCurrentProfile();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
        if(nextProps.profile.profile){
            const profile = nextProps.profile.profile;
            // back skills arr to csv
            const skullsCSV = profile.skills.join(',');
            // if profile fild does not exist, make empty string
            profile.company = !isEmpty(profile.company) ? profile.company : '';
            profile.website = !isEmpty(profile.website) ? profile.website : '';
            profile.location = !isEmpty(profile.location) ? profile.location : '';
            profile.githubusername = !isEmpty(profile.githubusername) ? profile.githubusername : '';
            profile.social = !isEmpty(profile.social) ? profile.social : '';
            profile.instagram = !isEmpty(profile.instagram) ? profile.instagram : '';
            profile.youtube = !isEmpty(profile.youtube) ? profile.youtube : '';
            profile.linkedin = !isEmpty(profile.linkedin) ? profile.linkedin : '';
            profile.facebook = !isEmpty(profile.facebook) ? profile.facebook : '';
            profile.twitter = !isEmpty(profile.twitter) ? profile.twitter : '';
            profile.bio = !isEmpty(profile.bio) ? profile.bio : '';

            // set components fields state
            this.setState({
                handle: profile.handle,
                company: profile.company,
                website: profile.website,
                location: profile.location,
                githubusername: profile.githubusername,
                status: profile.status,
                social: profile.social,
                skills: skullsCSV,
                twitter: profile.twitter,
                facebook: profile.facebook,
                linkedin: profile.linkedin,
                youtube: profile.youtube,
                instagram: profile.instagram,
                bio: profile.bio
            })
        }
    }
    onSubmit = e => {
        e.preventDefault();
        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        }
        this.props.createProfile(profileData,this.props.history);
    }
    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
  render() {
      const {errors, displaySocialInputs} = this.state;
      //select options for status
      const options = [
        {label: "* Select Professional Status", value: 0},
        {label: "Developer", value: "Developer"},
        {label: "Junior Developer", value: "Junior Developer"},
        {label: "Senior Developer", value: "Senior Developer"},
        {label: "Manager", value: "Manager"},
        {label: "Student or Learning", value: "Student or Learning"},
        {label: "Intern", value: "Intern"},
        {label: "Other", value: "Other"}
      ];
       let socialInputs;
       if(displaySocialInputs){
           socialInputs = (
               <div>
                    <InputGroup 
                        placeholder="Twitter frofile URL"
                        name="twitter"
                        icon="fab fa-twitter"
                        onChange={this.onChange}
                        value={this.state.twitter}
                        error={errors.twitter}
                    />
                     <InputGroup 
                        placeholder="Facebook frofile URL"
                        name="facebook"
                        icon="fab fa-facebook"
                        onChange={this.onChange}
                        value={this.state.facebook}
                        error={errors.facebook}
                    />
                    <InputGroup 
                        placeholder="Linkedin frofile URL"
                        name="linkedin"
                        icon="fab fa-linkedin"
                        onChange={this.onChange}
                        value={this.state.linkedin}
                        error={errors.linkedin}
                    />
                    <InputGroup 
                        placeholder="Youtube frofile URL"
                        name="youtube"
                        icon="fab fa-youtube"
                        onChange={this.onChange}
                        value={this.state.youtube}
                        error={errors.youtube}
                    />
                     <InputGroup 
                        placeholder="Instagram frofile URL"
                        name="instagram"
                        icon="fab fa-instagram"
                        onChange={this.onChange}
                        value={this.state.instagram}
                        error={errors.instagram}
                    /> 
               </div>
           )
       }
    return (
      <div>
       <div>
            <h1>Edit Profile</h1>
            <small>* = required fields</small>
            <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    error={errors.handle}
                    info="some info here"
                />
                <SelectListGroup
                    placeholder="Status"
                    name="status"
                    options={options}
                    value={this.state.status}
                    onChange={this.onChange}
                    error={errors.status}
                    info="some info here"
                />
                <TextFieldGroup 
                    placeholder="Company"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChange}
                    error={errors.company}
                    info="some info here"
                />
                <TextFieldGroup 
                    placeholder="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChange}
                    error={errors.website}
                    info="some info here"
                />
                 <TextFieldGroup 
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.location}
                    info="some info here"
                />
                 <TextFieldGroup 
                    placeholder="Skills"
                    name="skills"
                    value={this.state.skills}
                    onChange={this.onChange}
                    error={errors.skills}
                    info="some info here"
                />
                <TextFieldGroup 
                    placeholder="Github Username"
                    name="githubusername"
                    value={this.state.githubusername}
                    onChange={this.onChange}
                    error={errors.githubusername}
                    info="some info here"
                />
                <TextAreaFieldGroup 
                    placeholder="Short Bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    error={errors.bio}
                    info="some info here"
                />
                <div>
                    <button 
                        type="button"
                        onClick={prevState => {
                        this.setState(prevState => ({
                            displaySocialInputs: !prevState.displaySocialInputs
                        }))
                    }}>
                    Add social Network Links
                    </button>
                </div> 
                {socialInputs}
                <input type="submit" value="submit" />
            </form>
       </div>
      </div>
    )
  }
}

EditProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors
})


export default connect(mapStateToProps,{createProfile, getCurrentProfile})(withRouter(EditProfile))
