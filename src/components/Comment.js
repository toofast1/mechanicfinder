import React from 'react';
import PropTypes from 'prop-types';

import styles from './Comment.css';

const Comment = ({ body, className, userName }) => (
  <div className={`${styles.root} ${className}`}>
    <h3>{userName}</h3>
    <p>{body}</p>
  </div>
);

Comment.defaultProps = {
  className: ''
};

Comment.propTypes = {
  body: PropTypes.string.isRequired,
  className: PropTypes.string,
  userName: PropTypes.string.isRequired
};

export default Comment;