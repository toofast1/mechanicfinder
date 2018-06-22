import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StarRating from './StarRating';

import styles from './CommentForm.css';

class CommentForm extends Component {
  constructor({ body, userName, rating }) {
    super();
    this.state = { body, userName, rating };
  }
  onUsernameChange(e) {
    this.setState({ ...this.state, userName: e.target.value });
  }
  onBodyChange(e) {
    this.setState({ ...this.state, body: e.target.value });
  }
  onRatingChange(rating) {
    this.setState({ ...this.state, rating });
  }
  onFormSubmit(e) {
    let { body, userName, rating } = this.state;

    e.preventDefault();

    if (body.length === 0) return;

    if (userName.length === 0) userName = 'guest';

    this.props.onSubmit({ body, userName, rating });
    this.setState({ ...this.state, body: '', userName: '', rating: 0 });
  }
  render() {
    const { body, userName, rating } = this.state;
    const { onBodyChange, onFormSubmit, onUsernameChange, onRatingChange } = this;

    return (
      <form  className={styles.root}>
        <div className={styles.field}>
          <label>Nume:</label>
          <input type="text" value={userName} onChange={onUsernameChange.bind(this)} />
        </div>
        <div className={styles.field}>
          <label>Rating:*</label>
          <StarRating
            starCount={5}
            value={rating}
            starFillColor="#0173bd"
            starStrokeColor="#b7b7b7"
            starWidth={20}
            starHeight={24}
            onChange={onRatingChange.bind(this)} 
          />
        </div>
        <div className={styles.field}>
          <label>Comentariu:*</label>
          <textarea value={body} onChange={onBodyChange.bind(this)} />
        </div>
        <button onClick={onFormSubmit.bind(this)}>Trimite</button>
      </form>
    );
  }
}

CommentForm.defaultProps = {
  body: '',
  onSubmit: c => {},
  userName: ''
};

CommentForm.propTypes = {
  body: PropTypes.string,
  onSubmit: PropTypes.func,
  userName: PropTypes.string
};

export default CommentForm;