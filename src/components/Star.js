import React from 'react';
import PropTypes from 'prop-types';

import FaStar from 'react-icons/fa/star';
import FaStarO from 'react-icons/fa/star-o';

const Star = ({ colored, fillColor, strokeColor, width = 14, height = 14, ...props }) => (
  <div {...props}>
    { colored ? 
      <FaStar  style={ fillColor ? { color: fillColor, width, height } : { width, height } } /> : 
      <FaStarO style={ strokeColor ? { color: strokeColor, width, height } : { width, height } } /> 
    }
  </div>
);

Star.propTypes = {
  colored: PropTypes.bool,
  fillColor: PropTypes.string,
  strokeColor: PropTypes.string
}

export default Star;