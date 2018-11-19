import React, { Component } from 'react';
import MainPage from '../containers/MainPage';

import styles from './styles.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.wrap_main} >
        <MainPage />
      </div>
    );
  }
}
