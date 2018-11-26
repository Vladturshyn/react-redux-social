import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import Speener from '../Common/Speener';
import {getPosts} from '../../actions/postActions';
import PostFeed from './PostFeed';

export class Posts extends Component {
    componentDidMount(){
        this.props.getPosts();
    }
  render() {
      const {posts, loading} = this.props.post;

      let postContent;
      if(posts === null || loading){
        postContent= <Speener />
      }else{
          postContent = <PostFeed posts={posts} /> 
      }
    return (
      <div>
        <PostForm />
        {postContent}
      </div>
    )
  }
}
Posts.propTypes = {
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps, {getPosts})(Posts)
