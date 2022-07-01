import React from 'react';
import styles from './Button.module.scss';

type ButtonPropsType = {
  title: string;
};

const Button: React.FC<ButtonPropsType> = ({ title }) => {
  return (
    <button className={styles.button} type="button">
      {title}
    </button>
  );
};

export default Button;
