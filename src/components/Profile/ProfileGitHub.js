import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileGitHub extends Component {
    state = {
        clientId: '4cd7cc53074d43dd898d',
        clientSecret: '5cb42f3e746f115d4770c32f49eb3e0bf5ffc7d6',
        count: 5,
        sort: 'created: asc',
        repos: [] 
    }
    componentDidMount(){
        const {username} = this.props;
        const {clientId,clientSecret,count,sort} = this.state;

        fetch(`https://api.github.com/users/${username}/repos?per_page=
        ${count}&sort=${sort}&client_id=${clientId}$client_secret=${clientSecret}`)
        .then(res => res.json())
        .then(data => {
            this.setState({repos: data})
        })
        .catch(err => console.log(err))
    }
  render() {
      const {repos} = this.state;

      const reposItem = repos.map(rep=>(
          <div key={rep.id}>
          <h4><Link to={rep.html_url}>{rep.name}</Link></h4>
          <p>{rep.description}</p>
          </div>
      ))
    return (
      <div>
        <h3>Github Repos</h3>
        {reposItem}
      </div>
    )
  }
}
ProfileGitHub.propTypes = {
    username: PropTypes.string.isRequired
}
export default ProfileGitHub;