import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {deleteComment} from '../../actions/postActions';

class CommentItem extends Component {
    onDelete = (postId, commentId) =>{
        this.props.deleteComment(postId,commentId);
    }
  render() {
      const {comment, auth, postId}= this.props;
    return (
      <div>
        <img src={comment.avatar} alt="avatar" />
        <p>{comment.name}</p>
        <p>{comment.text}</p>
        {comment.user === auth.user.id ? (
            <button onClick={this.onDelete.bind(this, postId, comment._id)}>Delete</button>) : null }
      </div>
    )
  }
}

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    comment: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth
});

export default connect(mapStateToProps, {deleteComment})(CommentItem);
