import React, { Component } from 'react';

import styles from './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <div className={styles["root"]}>
        <input type="text" placeholder="e.g El Mejor Taller" />
        <button>Search</button>
      </div>
    );
  }
}

export default SearchBox;