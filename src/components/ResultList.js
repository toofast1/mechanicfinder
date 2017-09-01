import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import Result from './Result';

import styles from './ResultList.css';

const ResultList = ({ className = '', elementClass = '', style = {}, results = [] }) => (
  <div className={`${styles.root} ${className}`} style={style}>
    {results.map((e, i) => (<Result className={elementClass} key={i} data={e} />))}
  </div>
);

ResultList.propTypes = {
  className: PropTypes.string,
  elementClass: PropTypes.string,
  style: PropTypes.object,
  results: PropTypes.arrayOf(PropTypes.object)
};

export default ResultList;