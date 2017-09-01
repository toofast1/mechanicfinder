import React from 'react';

import styles from './Option.css';

const Option = 
  ({ children, value = 0 }) => <option className={styles.root} value={value}>{children}</option>;
  
export default Option;