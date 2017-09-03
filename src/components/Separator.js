import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_COLOR = '#ccc';
const DEFAULT_MARGIN = 13;
const DEFAULT_WIDTH = 1;

const Separator = ({ 
    color = DEFAULT_COLOR, 
    marginBottom = DEFAULT_MARGIN, 
    marginTop = DEFAULT_MARGIN, 
    width = DEFAULT_WIDTH 
}) => (
    <div
        style={{
            backgroundColor: color,
            height: width,
            marginBottom,
            marginTop
        }}
    />
);

Separator.propTypes = {
    color: PropTypes.string,
    marginBottom: PropTypes.number,
    marginTop: PropTypes.number,
    width: PropTypes.number
};

export default Separator;