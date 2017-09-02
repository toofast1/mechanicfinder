import React from 'react';
import PropTypes from 'prop-types';

import FaStar from 'react-icons/fa/star';
import FaStarO from 'react-icons/fa/star-o';

const Star = ({ colored, ...props }) => (
  <div {...props}>
    { colored ? <FaStar /> : <FaStarO /> }
  </div>
);

Star.propTypes = {
  colored: PropTypes.bool
}

export default Star;