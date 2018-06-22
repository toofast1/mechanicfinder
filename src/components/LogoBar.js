import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Logo from 'assets/img/logo';

import styles from './LogoBar.css';

const Img = withRouter(({ history }) => (
  <img src={Logo} onClick={e => history.push('/')} />
));

const LogoBar = () => (
  <div className={styles.root}>
    <a href="/" onClick={e => history.push('/')}><h2 className={styles.logo}>Mecanici Alfa Romeo Romania</h2></a>
  </div>
);

export default LogoBar;