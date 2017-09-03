import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_COLOR = '#ccc';
const DEFAULT_MARGIN = 13;

const Separator = ({ color = DEFAULT_COLOR, marginBottom = DEFAULT_MARGIN, marginTop = DEFAULT_MARGIN }) => (
    <div
        style={{
            backgroundColor: color,
            height: 1,
            marginBottom,
            marginTop
        }}
    />
);

Separator.propTypes = {
    color: PropTypes.string,
    marginBottom: PropTypes.number,
    marginTop: PropTypes.number
};

export default Separator;