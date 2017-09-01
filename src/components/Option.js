import React from 'react';

import styles from './Option.css';

const Option = 
  props => <option className={styles.root}>{props.children}</option>;

export default Option;