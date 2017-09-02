import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import FaStarO from 'react-icons/fa/star-o';
import FaMoney from 'react-icons/fa/money';
import FaCommentO from 'react-icons/fa/comment-o';

import tallerTmp from 'assets/img/taller-tmp';

import styles from './Result.css';

const iconPairStyle = { marginRight: 15 };

const Keywords = ({kw}) => <div className={styles.keyword}>{kw}</div>;

const IconPair = ({ Icon, text = '', title = '', style = {} }) => (
  <div style={{ display: 'flex', ...style }} title={title}>
    <Icon style={{ fontSize: 20, marginRight: 5 }} />
    <span style={{ alignSelf: 'center' }}>{text}</span>
  </div>
);

const H2 = withRouter(({ className, history, children }) => (
  <h2 className={className} onClick={e => history.push(`/${children}`)} >{children}</h2>
));

const Result = ({ className = '', style = {}, data }) => (
  <div className={`${styles.root} ${className}`} style={style}>
    { data.picture ? <img className={styles.picture} src={data.picture} alt="Foto del taller" /> : null }
    <div className={styles.details}>
      <H2 className={styles.title}>{data.name}</H2>
      <div className={styles.stats}>
        <IconPair
          Icon={FaStarO}
          text={data.userScore}
          title="Puntaje General"
          style={iconPairStyle}
        />
        <IconPair
          Icon={FaCommentO}
          text={data.comments.length}
          title="Comentarios"
          style={iconPairStyle} 
        />
        <IconPair
          Icon={FaMoney}
          text={data.highPrice}
          title="Precio Estimado"
        />
      </div>
      <p className={styles.description}>{data.description}</p>
      <div className={styles["keyword-list"]}>
      {data.keywords.map((d, i) => 
        <Keywords key={i} kw={d} />)}
      </div>
      <div className={styles.separator}></div>
      <div className={styles["extra-details"]}>
        <p className={styles.location}>
          {data.location}
        </p>
      </div>
    </div>
  </div>
);

Result.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  data: PropTypes.object.isRequired
};

export default Result;