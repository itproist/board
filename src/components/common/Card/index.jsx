import React from 'react';
import styles from './Card.module.scss';
import eyes from '../../../assets/img/eyes.png';

const Card = (props) => {
  return (
    <div className={styles.cards}>
      <div className="cards_img">
        <img src={props.post.src} alt={props.post.alt} />
      </div>
      <div className="cards_content">
        <div className={styles.cards_category}>{props.post.category}</div>
        <div className={styles.cards_title}>{props.post.title}</div>
        <div className={styles.cards_text}>{props.post.text}</div>
        <div className={styles.cards_price}>{props.post.price}</div>
        <div className={styles.cards_date_of_count}>
          <div className={styles.cards_publication}>{props.post.publication}</div>
          <div className={styles.cards_count}>
            <img src={eyes} alt="eyes" />
            <span className={styles.cards_counts}>{props.post.count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
