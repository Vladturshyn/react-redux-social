import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment'; 
import {deleteExperience} from '../../actions/profileActions';

class Experience extends Component {
    onDelete = (id) =>{
        this.props.deleteExperience(id)
    }
  render() {
      const experience = this.props.experience.map(exp => (
          <tr key={exp._id}>
            <td>{exp.company}</td>
            <td>{exp.title}</td>
            <td>
                <Moment format="DD/MM/YYYY">{exp.form}</Moment> - {' '}
                { exp.to === null ? (' Now') : <Moment format="DD/MM/YYYY">{exp.to}</Moment>}
            </td>
            <td>
                <button onClick={this.onDelete.bind(exp._id)}>
                    Delete
                </button>
            </td>
          </tr>
      ))
    return (
      <div>
        <h4>Experience Credentials</h4>
        <table>
            <thead>
                <tr>
                    <td>Company</td>
                    <td>Title</td>
                    <td>Years</td>
                </tr>
                {experience}
            </thead>
        </table>
      </div>
    )
  }
}

Experience.propTypes = {
    deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experience)
