import React from 'react';
import styles from './ButtonOther.module.scss';

type MainButtonsPropsType = {
  title: string;
};

const MainButtonsBlue = ({ title }: MainButtonsPropsType) => {
  return (
    <button className={styles.btn_other} type="button">
      {title}
    </button>
  );
};

export default MainButtonsBlue;
