import React, { Component } from 'react';

import LogoBar from './components/LogoBar';
import SearchBox from './components/SearchBox';

import styles from './MechanicFinder.css';

class MechanicFinder extends Component {
  render() {
    return (
      <div>
        <LogoBar />
        <div className={styles["banner"]}>
          <p>Encuentra tu taller al mejor precio</p>
        </div>
        <SearchBox />
      </div>
    );
  }
}

export default MechanicFinder;