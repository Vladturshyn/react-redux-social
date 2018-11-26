import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getPost} from '../../actions/postActions';
import Speener from '../../components/Common/Speener';
import PostItem from '../Posts/PostItem';

class Post extends Component {
    componentDidMount(){
        this.props.getPost(this.props.match.params.id)
    }
  render() {
      const {post, loading} = this.props.post;
      let postContent;
      if(post === null || loading || Object.keys(post).length === 0){
          postContent = <Speener />
      }else{
         postContent = (
            <div>
                <PostItem post={post} showAction={false} />
            </div>
         )
      }
    return (
      <div>
          <div>
            <Link to="/feed"> Back to Feed</Link>
          </div>
          <div>
              {postContent}
          </div>
      </div>
    )
  }
}
Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    post: state.post
})

export default connect(mapStateToProps,{getPost})(Post);
