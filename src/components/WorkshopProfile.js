import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import StarRating from './StarRating';
import CommentSection from './CommentSection';

import defaultImg from 'assets/img/taller-tmp';

import styles from './WorkshopProfile.css';

import workshopMock from '../data/workshop-mock.json';

class WorkshopProfile extends Component {
  constructor({ match: { params: { workshop } } }) {
    super();

    this.workshop = workshopMock.find(w => 
        w.name.toLowerCase() === workshop.toLowerCase());

    this.state = {
      rating: this.workshop.userScore,
      comments: this.workshop.comments
    };
  }
  onRatingChange(rating) {
    this.setState({ ...this.state, rating });
  }
  onNewComment(comment) {
    this.setState({ 
      ...this.state, 
      comments: [...this.state.comments, comment] 
    });
  }
  render() {
    const { workshop, onRatingChange, onNewComment } = this;
    const { rating, comments } = this.state;
    const pic = workshop.picture.length > 0 ?
      workshop.picture : defaultImg;

    return (
      workshop ?
      <div className={styles.root}>
        <div className={styles["img-area"]}>
          <img src={pic} alt="Foto del taller" />
        </div>
        <div className={styles.details}>
          <h2>{workshop.name}</h2>
          <StarRating
            starCount={5}
            value={Math.round(rating)}
            onChange={onRatingChange.bind(this)} 
          />
          <p><b>Precio Alto:</b> Lps. {workshop.highPrice}</p>
          <p><b>Descripcion:</b> {workshop.description}</p>
          <p><b>Ubicacion:</b> {workshop.location}</p>
        </div>
        <CommentSection
          className={styles.comments}
          comments={comments}
          onNewComment={onNewComment.bind(this)}
        />
      </div> :
      <Redirect to="/" />
    );
  }
}

export default WorkshopProfile;