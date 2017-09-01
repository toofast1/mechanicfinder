import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import styles from './SearchBox.css';

const linkStyle = { color: "#fff", textDecoration: "none" }; 

function search(history, value) {
  value = value.trim();
  if (value.length > 0)
    history.push(`/buscar?q=${value}`);
}

const Input = withRouter(({ value, onChange, history }) => (
  <input type="text" placeholder="e.g El Mejor Taller" 
        value={value} onChange={onChange}
         onKeyPress={e => { if (e.which == 13) search(history, value); }} autoFocus />
));

const Button = withRouter(({ history, searchText, children }) => (
  <button onClick={() => search(history, searchText)} style={{ cursor: 'pointer' }}>{children}</button>
));

const SearchBox = ({ className = '', style = {}, value, onChange }) => (
  <div className={`${styles.root} ${className}`} style={style}>
    <Input value={value} onChange={onChange} />
    <Button searchText={value}>Search</Button>
  </div>
);

SearchBox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default SearchBox;