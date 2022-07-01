import React from 'react';
import notfound from '../../../assets/img/notfound.png';
import styles from './NotFoundPages.module.scss';

const NotFoundPages = () => {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfound_text}>
        <h2>Упс! Кажется, на эту страницу прилег котик</h2>
        <div className={styles.notfound_text_opacity}>
          <p>Ошибка 404</p>
          <p>Мы уже разбираемся, почему так получилось, скоро все починим.</p>
        </div>
      </div>
      <div className={styles.notfound_img}>
        <img src={notfound} alt="notfound" />
      </div>
    </div>
  );
};

export default NotFoundPages;
