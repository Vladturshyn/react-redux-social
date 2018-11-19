import React, { Component } from 'react';
import speener from './speener.gif';

export default class Speener extends Component {
  render() {
    return (
      <div>
        <img 
            src={speener}
            style={{width:'200px', margin: 'auto', display: 'block'}}
            alt="Loading..."
        />
      </div>
    )
  }
}
