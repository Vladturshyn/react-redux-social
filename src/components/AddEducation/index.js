import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from '../Common/TextFieldGroup';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
   constructor(props){
       super(props);
       this.state = {
           school: '',
           degree: '',
           fieldofstudy: '',
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
    const eduData = {
      school: this.state.school,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      description: this.state.description
    }
   this.props.addEducation(eduData, this.props.history)
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
        <h1>Add Education</h1>
        <p>Add any school or bootcamp that you have attended</p>
        <small>*= Required fields</small>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup 
            placeholder="* School"
            name="school"
            value={this.state.school}
            onChange={this.onChange}
            error={errors.school}
          />
          <TextFieldGroup 
            placeholder="* Degree or Sertification"
            name="degree"
            value={this.state.degree}
            onChange={this.onChange}
            error={errors.degree}
          />
          <TextFieldGroup 
            placeholder="Field of Study"
            name="fieldofstudy"
            value={this.state.fieldofstudy}
            onChange={this.onChange}
            error={errors.fieldofstudy}
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
            placeholder="Program Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            info="Tell us about the program that you were in"
           />
           <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
} 
const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors
})


export default connect(mapStateToProps,{addEducation})(withRouter(AddEducation))
