import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Speener from '../Common/Speener';

export class Posts extends Component {
  render() {
    return (
      <div>
        <PostForm />
      </div>
    )
  }
}
Posts.propTypes = {

}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
