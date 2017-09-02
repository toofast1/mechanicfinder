import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Star from './Star';

function renderStars(count, isColored, value, onChange, onHover, onHoverEnd, props) {
  let stars = [];

  for (let i = 0; i < count; i++) {
    stars = [ ...stars, (
      <Star 
        key={i}
        colored={isColored(i)} 
        onClick={e => !i && value == 1 ? onChange(0) : onChange(i+1)} 
        onMouseOver={e => onHover(i)}
        onMouseLeave={e => onHoverEnd()}
        {...props}
      />)]
  }

  return stars;
}

const style = {
  display: 'flex'
};

class StarRating extends Component {
  constructor(props) {
    super();

    this.state = {
      hoveredStarIndex: -1
    };
  }
  onStarHover(hoveredStarIndex) {
    this.setState({ ...this.state, hoveredStarIndex });
  }
  onHoverEnd() {
    this.setState({ ...this.state, hoveredStarIndex: -1 });
  }
  render() {
    const { starCount, value, onChange } = this.props;
    const { hoveredStarIndex } = this.state;
    const { onStarHover, onHoverEnd } = this;

    return (
      <div style={style}>
        {
          renderStars(
            starCount, 
            i => i < value || i <= hoveredStarIndex,
            value, 
            onChange, 
            onStarHover.bind(this),
            onHoverEnd.bind(this)
          )
        }
      </div>
    );
  }
}

StarRating.propTypes = {
  starCount: PropTypes.number.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func
};

export default StarRating;