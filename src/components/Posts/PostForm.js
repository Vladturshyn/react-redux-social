import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../Common/TextAreaFieldGroup';
import {addPost} from '../../actions/postActions';

class PostForm extends Component {
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
        const newPost = {
            text: this.state.text,
            name: user.name,
            avatar: user.avatar
        }
        this.props.addPost(newPost);
        this.setState({text: ''});
    }
  render() {
      //const {errors} = this.state;
    return (
      <div>
          <div>Say Somesing ...</div>
        <form onSubmit={this.onSubmit}>
            <TextAreaFieldGroup 
                placeholder="Create a post"
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

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps,{addPost})(PostForm);