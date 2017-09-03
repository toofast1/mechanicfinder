import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './CommentSection.css';

import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = ({ className = '', comments = [], onNewComment = c => {} }) => (
  <div className={`${styles.root} ${className}`}>
    <h2>Comentarios ({comments.length})</h2>
    {
      comments.map((c, i) => (
        <Comment key={i} {...c} />
      ))
    }
    <h2>Comenta tu Opinion</h2>
    <CommentForm onSubmit={onNewComment} />
  </div>
);

CommentSection.propTypes = {
  className: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
  onNewComment: PropTypes.func
};

export default CommentSection;