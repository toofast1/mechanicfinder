import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import StarRating from './StarRating';
import CommentSection from './CommentSection';

import Separator from './Separator';

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
        {/* Back to Results Button Here */}
        <div className={styles["profile-section"]}>
          <div className={styles.header}>
            <img src={pic} alt="Foto del taller" />
            <div className={styles["header-info"]}>
              <h2>{workshop.name}</h2>
              <p className={styles.location}>{workshop.location}</p>
              <StarRating
                starCount={5}
                starFillColor="#0173bd"
                starStrokeColor="#b7b7b7"
                starWidth={18}
                starHeight={18}
                value={Math.round(rating)}
                disabled
              />
            </div>
          </div>
          <div className={styles.details}>
            <Separator />
            <div className={styles["detail-section"]}>
              <h4>Sobre Este Taller</h4>
              <p className={styles.description}>{workshop.description}</p>
            </div>
            <Separator />
            <div className={styles["detail-section"]}>
              <h4>Horas de Atencion</h4>
              <p className={styles["shop-hours"]}>
                <b>{workshop.shopHours.days}</b>
                <span>{workshop.shopHours.hours}</span>
              </p>
            </div>
            <Separator />
            <div className={styles["detail-section"]}>
              <h4>Servicios</h4>
              <ul>
                {workshop.keywords.map((k, i) => <li key={i}>{k}</li>)}
              </ul>
            </div>
            <Separator />
            <div className={styles["detail-section"]}>
              <h4>Tipos de Pago</h4>
              <ul>
                {workshop.paymentTypes.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <Separator />
          </div>
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