import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';
import {addComment} from '../../actions/postActions';

class CommentForm extends Component {
    state={
        text: '',
        errors: {}
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }
    onSubmit = e =>{
        e.preventDefault();
        const {user} = this.props.auth;
        const {postId} = this.props;
        const commentData = {
            text: this.state.text,
            name: user.name,
            avatar: user.avatar
        }
        this.props.addComment(postId,commentData);
        this.setState({text: ''});
    }
  render() {
      //const {errors} = this.state;
    return (
      <div>
          <div>Make a comment ...</div>
        <form onSubmit={this.onSubmit}>
            <TextAreaFieldGroup 
                placeholder="Reply to post"
                name="text"
                value={this.state.text}
                onChange={this.onChange}
                error={this.state.errors}
            />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    postId: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps,{addComment})(CommentForm);