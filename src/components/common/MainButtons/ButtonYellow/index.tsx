import React from 'react';
import styles from './ButtonYellow.module.scss';

type MainButtonsPropsType = {
  title: string;
};

const MainButtons = ({ title }: MainButtonsPropsType) => {
  return (
    <button className={styles.btn_yellow} type="button">
      {title}
    </button>
  );
};

export default MainButtons;
