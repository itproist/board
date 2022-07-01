import React from 'react';
import styles from './ButtonBlue.module.scss';

type MainButtonsPropsType = {
  title: string;
};

const MainButtonsBlue = ({ title }: MainButtonsPropsType) => {
  return (
    <button className={styles.btn_blue} type="button">
      {title}
    </button>
  );
};

export default MainButtonsBlue;
