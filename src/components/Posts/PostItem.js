import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class PostItem extends Component {
    onDelete = (id) => {
        console.log(id);
    }
  render() {
      const {post, auth} = this.props;
    return (
      <div>
        <img src={post.avatar} alt="avatar"/>
        <p>{post.name}</p>
        <p>{post.text}</p>
        <button>like<span>{post.likes.length}</span></button>
        <Link to={`/post/${post._id}}`}> Comments</Link>
        {post.user === auth.user.id ? 
            (<button onClick={this.onDelete.bind(this, post._id)}>Delete</button>) : null }
      </div>
    )
  }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PostItem)
