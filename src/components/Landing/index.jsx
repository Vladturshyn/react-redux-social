import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';
import './style.scss';

// import Register from '../Auth/Register';
// import Login from '../Auth/Login';

class Landing extends Component {
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
          this.props.history.push('/dashbord');
        }
  }
  render() {
    return (
      <div className="wrap_landing">
        <h1>Developer Connector</h1>
        <p>Creacte developer porfolio/profile</p>
        <div>
            <Link to="/register"><button> Sign Up</button></Link>
            <Link to="/login"><button> Login </button> </Link>
        </div> 
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing)