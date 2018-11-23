import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import {clearCurrentProfile} from '../../actions/profileActions';
import {PropTypes} from 'prop-types';
import './style.scss';

class Navbar extends Component {
    onLogoutClick = e =>{
        e.preventDefault();
        this.props.logoutUser();
        this.props.clearCurrentProfile();
    }
  render() {
      const {isAuthenticated, user}=this.props.auth;

      const authLinks = (
        <nav>
            <ul>
                <li>
                    <Link to="/dashboard">Dashbord</Link>
                </li>
                <li>
                 <img 
                    src={user.avatar} 
                    alt={user.name} 
                    style={{width: '25px', marginRight: '5px'}}
                    title="You must have a Gravatar" />
                  <button onClick={this.onLogoutClick.bind(this)}>
                  Logout
                  </button>
                </li>
                
            </ul>
        </nav>
      );
      const guestLinks = (
        <nav>
            <ul>
                <li>
                    <Link to="/register">sign up</Link>
                </li>
                <li>
                    <Link to="/login">login</Link>
                </li>
            </ul>
        </nav>
      );
    return (
      <div className="wrap_header">
        <div className="wrap_logo">
            <nav>
                <ul>
                    <li>
                        <Link to="/">DevConnector</Link>
                    </li>
                    <li>
                        <Link to="/profiles">Developers</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="wrap_login">
           {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    )
  }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) =>({
    auth: state.auth
})


export default connect(mapStateToProps,{ logoutUser, clearCurrentProfile })(
    Navbar
);