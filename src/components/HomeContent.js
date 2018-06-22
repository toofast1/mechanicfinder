import React, { Component } from 'react';

import SearchBox from './SearchBox';

import styles from './HomeContent.css';

class HomeContent extends Component {
  constructor() {
    super();

    this.state = { queryStr: "" };
  }
  onSearchBoxChange(e) {
    this.setState({ queryStr: e.target.value });
  }
  render() {
    const { queryStr } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.banner}>
          <p>Găsiți service auto Alfa Romeo la cel mai bun pret</p>
        </div>
        <div className={styles.search}>
          <SearchBox value={queryStr} 
            onChange={this.onSearchBoxChange.bind(this)} />
        </div>
      </div>
    );
  }
}

export default HomeContent;