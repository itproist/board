import React, { useState } from 'react';
import Menu from '../../common/Ad/Menu';
import Picture from '../../common/Picture';
import PostForm from '../../common/Post/PostForm';
import Button from '../../common/Post/PostForm/Button';
import styles from './AddPages.module.scss';
import backarrow from '../../../assets/img/arrow/back.png';
import { useNavigate } from 'react-router-dom';

const AddPages = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <div className={styles.add}>
      <Menu ad="Объявления" logout="Выход" />
      <div className={styles.add_exit}>
        <div className={styles.add_back}>
          <Picture src={backarrow} alt="back" onClick={back} />
          Вернуться назад
        </div>
        <div className={styles.add_block}>
          <button type="button" className={styles.add_button}>
            Сохранить
          </button>
        </div>
        <PostForm />
      </div>
    </div>
  );
};

export default AddPages;
