import React from 'react';
import styles from './Input.module.scss';

type InputSearchPropsType = {
  placeholder: string;
  type: 'search';
  className: string;
};

const InputSearch = ({ placeholder, type, className }: InputSearchPropsType) => {
  return <input className={className} placeholder={placeholder} type={type} />;
};

export default InputSearch;
