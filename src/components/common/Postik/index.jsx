import React from 'react';
import Picture from '../Picture';
import PostForm from '../Post/PostForm';
import styles from './Postik.module.scss';
import dot from '../../../assets/img/dot.png';
import eyes from '../../../assets/img/eyes.png';
import deletes from '../../../assets/img/delete.png';
import repair from '../../../assets/img/repair.png';
import { Link } from 'react-router-dom';

const Postik = (props) => {
  return (
    <div className={styles.post_content}>
      <div className={styles.post_title}>{props.post.title}</div>
      <div className={styles.post_category}>{props.post.category}</div>
      <div className={styles.post_date}>{props.post.publication}</div>
      <div className={styles.post_publication}>{props.post.isPublication}</div>
      <div className={styles.post_dot}>
        <Picture src={dot} alt="dot" />
        <div className={styles.post_hover}>
          <Link to="/view">
            <div className={styles.post_eyes}>
              <img src={eyes} alt="eyes" />
              Просмотреть
            </div>
          </Link>
          <Link to="/repair">
            <div className={styles.post_repair}>
              <img src={repair} alt="repair" />
              Редактировать
            </div>
          </Link>
          <div onClick={() => props.remove(props.post)} className={styles.post_delete}>
            <img src={deletes} alt="delete" />
            Удалить
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postik;
