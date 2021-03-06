import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../Common/TextFieldGroup';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';
import {addExperience} from '../../actions/profileActions';

class AddExperience extends Component {
   constructor(props){
       super(props);
       this.state = {
           company: '',
           title: '',
           location: '',
           from: '11.11',
           to: '11.11',
           current: false,
           description: '',
           errors: {},
           disabled: false
       }
   }
  
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onSubmit = e =>{
    e.preventDefault();
    const expData = {
      company: this.state.company,
      title: this.state.title,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description
    }
    this.props.addExperience(expData, this.props.history);
  }
  onChange = e =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onCheched = e =>{
    this.setState({
      current:!this.state.current,
      disabled:!this.state.disabled
    })
  }
  render() {
      const {errors} = this.props;
    return (
      <div>
        <Link to="/dashboard">Go back</Link>
        <h1>Add Experience</h1>
        <p>Add any job or position that you have had in the past or current</p>
        <small>*= Required fields</small>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup 
            placeholder="* Company"
            name="company"
            value={this.state.company}
            onChange={this.onChange}
            error={errors.company}
          />
          <TextFieldGroup 
            placeholder="* Job Title"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            error={errors.title}
          />
          <TextFieldGroup 
            placeholder="Location"
            name="location"
            value={this.state.location}
            onChange={this.onChange}
            error={errors.location}
          />
          <h6>From Date</h6>
          <TextFieldGroup 
            placeholder="from"
            name="date"
            value={this.state.from}
            onChange={this.onChange}
            error={errors.from}
          />
          <h6>From Date</h6>
          <TextFieldGroup 
            placeholder="to"
            name="date"
            value={this.state.to}
            onChange={this.onChange}
            error={errors.to}
            disabled={this.state.disabled ? 'disabled': ''}
          />
          <div>
            <input 
              type="checkbox" 
              name="current" 
              value={this.state.current} 
              checked={this.state.current}
              onChange={this.onCheched}
              id="current" />
              <label htmlFor="current">
                Current Job
              </label>
          </div>
          <TextAreaFieldGroup 
            placeholder="Job Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            info="Tell us about the position"
           />
           <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
} 
const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors
})


export default connect(mapStateToProps,{addExperience})(withRouter(AddExperience))
