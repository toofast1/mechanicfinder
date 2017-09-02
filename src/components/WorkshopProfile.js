import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import StarRating from './StarRating';

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
  render() {
    const { workshop, onRatingChange } = this;
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
          <StarRating starCount={5} value={Math.round(rating)} onChange={onRatingChange.bind(this)} />
          <p><b>Precio Alto:</b> Lps. {workshop.highPrice}</p>
          <p><b>Descripcion:</b> {workshop.description}</p>
          <p><b>Ubicacion:</b> {workshop.location}</p>
        </div>
        {/* <div className={styles.comments}>
          <h3>Comentarios ({workshop.comments.length})</h3>
          <ul>
            {comments.map((c, i) => <li key={i}>Comment</li>)}
          </ul>
        </div>
        <form>
          <label>Nombre</label>
          <input type="text" placeholder="e.g. wupa9" />
          <label>Comentario</label>
          <textarea></textarea>
        </form> */}
      </div> :
      <Redirect to="/" />
    );
  }
}

export default WorkshopProfile;