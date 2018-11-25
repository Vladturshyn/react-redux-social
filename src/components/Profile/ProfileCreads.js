import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

class ProfileCreads extends Component {
  render() {
      const {experience, education} = this.props;

      const expItem = experience.map(exp=> (
          <li key={exp._id}>
            <h4>{exp.company}</h4>
            <p>
                <Moment format="MM/YYYY">{exp.from}</Moment> - 
                {exp.to === null ? ('Now') : (<Moment format="MM/YYYY">{exp.to}</Moment>)}
            </p>
            <p><strong>Prosition: </strong>{exp.title}</p>
            <p>
                {exp.location === '' ? null : (<span><strong>Location:</strong>{exp.location}</span>)}
            </p>
            <p>
                {exp.description === '' ? null : (<span><strong>Description:</strong>{exp.description}</span>)}
            </p>
          </li>
      ));
      const eduItem = education.map(edu => (
          <li key={edu._id}>
            <h4>{edu.school}</h4>
            <p>
                <Moment format="MM/YYYY">{edu.from}</Moment> - 
                {edu.to === null ? ('Now') : (<Moment format="MM/YYYY">{edu.to}</Moment>)}
            </p>
            <p><strong>Degree: </strong>{edu.degree}</p>
            <p>
            <strong>Field of study:</strong>{edu.fieldofstudy}
            </p>
            <p>
                {edu.description === '' ? null : (<span><strong>Description:</strong>{edu.description}</span>)}
            </p>
          </li>
      ))
    return (
      <div>
        <div>
            {expItem.length > 0 ? (
                <ul>
                    {expItem}
                </ul>
            ) : (
                <p>No experience Listed</p>
            )}
        </div>
        <div>
            {eduItem.length > 0 ? (
                <ul>
                    {eduItem}
                </ul>
            ) : (
                <p>No education Listed</p>
            )}
        </div>
      </div>
    )
  }
}
ProfileCreads.propTypes = {
    experience: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired
}
export default ProfileCreads;