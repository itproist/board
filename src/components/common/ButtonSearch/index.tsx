import React from 'react';
import styles from './ButtonSearch.module.scss';

type ButtonSearchPropsType = {
  title: string;
};

const ButtonSearch = ({ title }: ButtonSearchPropsType) => {
  return (
    <button className={styles.button} type="button">
      {title}
    </button>
  );
};

export default ButtonSearch;
