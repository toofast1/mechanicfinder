import React, { Component } from 'react';

import Logo from 'assets/img/logo';

import styles from './LogoBar.css';

class LogoBar extends Component {
  render() {
    return (
      <div className={styles["root"]}>
        <img src={Logo} />
      </div>
    );
  }
}

export default LogoBar;