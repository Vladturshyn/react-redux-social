import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TextFieldGroup from '../Common/TextFieldGroup';
import InputGroup from '../Common/InputGroup';
import SelectListGroup from '../Common/SelectListGroup';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';


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
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: '',
            errors: {}
        }
    }
    onSubmit = e => {
        e.preventDefault();
        
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
                    />
                     <InputGroup 
                        placeholder="Facebook frofile URL"
                        name="facebook"
                        icon="fab fa-facebook"
                        onChange={this.onChange}
                        value={this.state.facebook}
                    />
                    <InputGroup 
                        placeholder="Linkedin frofile URL"
                        name="linkedin"
                        icon="fab fa-linkedin"
                        onChange={this.onChange}
                        value={this.state.linkedin}
                    />
                    <InputGroup 
                        placeholder="Youtube frofile URL"
                        name="youtube"
                        icon="fab fa-youtube"
                        onChange={this.onChange}
                        value={this.state.youtube}
                    />
                     <InputGroup 
                        placeholder="Instagram frofile URL"
                        name="instagram"
                        icon="fab fa-instagram"
                        onChange={this.onChange}
                        value={this.state.instagram}
                    /> 
               </div>
           )
       }
    return (
      <div>
       <div>
            <h1>Create Your profile</h1>
            <p>Let's some information to make your profile send out</p>
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
                    name="Company"
                    value={this.state.company}
                    onChange={this.onChange}
                    error={errors.company}
                    info="some info here"
                />
                <TextFieldGroup 
                    placeholder="Website"
                    name="Website"
                    value={this.state.website}
                    onChange={this.onChange}
                    error={errors.website}
                    info="some info here"
                />
                 <TextFieldGroup 
                    placeholder="Location"
                    name="Location"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.location}
                    info="some info here"
                />
                 <TextFieldGroup 
                    placeholder="Skills"
                    name="Skills"
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
                    <button onClick={prevState => {
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

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors
})


export default connect(mapStateToProps)(CreateProfile)
