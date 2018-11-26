import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, addLike, removeLike } from '../../actions/postActions';

class PostItem extends Component {
    onDelete = (id) => {
       this.props.deletePost(id);
    }
    onLikeClick = id =>{
        this.props.addLike(id)
    }
    onUnLikeClick = id =>{
        this.props.removeLike(id)
    }
    findUserLike = (likes) => {
        const {auth} = this.props;
        if(likes.filter(like=> like.user === auth.user.id).length > 0){
            return true;
        }else{
            return false;
        }
    }
  render() {
      const {post, auth, showAction} = this.props;
    return (
      <div>
        <img src={post.avatar} alt="avatar"/>
        <p>{post.name}</p>
        <p>{post.text}</p>
        {showAction ? (<span>
            <button onClick={this.onLikeClick.bind(this, post._id)}>Like<span>{post.likes.length}</span></button>
            <button onClick={this.onUnLikeClick.bind(this, post._id)}>RemoveLike<span>{post.likes.length}</span></button>
            <Link to={`/posts/${post._id}`}>Comments</Link>
            {post.user === auth.user.id ? (<button onClick={this.onDelete.bind(this, post._id)}>Delete</button>) : null }
            </span> ) : null}
      </div>
    )
  }
}

PostItem.defaultProps = {
    showAction: true
}

PostItem.propTypes = {
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps,{ deletePost,addLike,removeLike })(PostItem)
