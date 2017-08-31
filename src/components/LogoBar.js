import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Logo from 'assets/img/logo';

import styles from './LogoBar.css';

const Img = withRouter(({ history }) => (
  <img src={Logo} onClick={e => history.push('/')} />
));

const LogoBar = () => (
  <div className={styles.root}>
    <Img />
  </div>
);

export default LogoBar;