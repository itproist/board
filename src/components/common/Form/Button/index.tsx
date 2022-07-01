import React from 'react';
import styles from './Button.module.scss';

type ButtonPropsType = {
  title: string;
  onClick: () => void;
};

const Button = ({ title, onClick, ...props }: ButtonPropsType) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button className={styles.button} type="button" {...props} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
