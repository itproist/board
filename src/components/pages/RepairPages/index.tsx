import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../../common/Ad/Menu';
import Picture from '../../common/Picture';
import styles from './RepairPages.module.scss';
import backarrow from '../../../assets/img/arrow/back.png';
import PostForm from '../../common/Post/PostForm';

const RepairPages = () => {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <div className={styles.view}>
      <Menu ad="Объявления" logout="Выход" />
      <div className={styles.view_props}>
        <div className={styles.add_back}>
          <Picture src={backarrow} alt="back" onClick={back} />
          Вернуться назад
        </div>
        <div className={styles.add_block}>
          <button disabled type="button" className={styles.add_button}>
            Просмотр
          </button>
        </div>
        <PostForm />
      </div>
    </div>
  );
};

export default RepairPages;
