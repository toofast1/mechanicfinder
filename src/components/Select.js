import React from 'react';
import PropTypes from 'prop-types';

import styles from './Select.css';

const Select = ({ children, className = '', onChange = e => {}, style = {}, value = 0 }) => (
  <select
    className={`${styles.root} ${className}`}
    onChange={onChange}
    style={style}
    value={value}>
      {children}
  </select>
);

Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.number
};

export default Select;