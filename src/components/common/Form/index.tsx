import React from 'react';
import styles from './Form.module.scss';
import { NavLink } from 'react-router-dom';

type FormPropsType = {
  content: string;
  text: string;
  children: any;
};

const Form = ({ content, text, children }: FormPropsType) => {
  return (
    <>
      <form>
        <div className={styles.form}>
          <div className={styles.form_header}>
            <p className={styles.form_content}>{content}</p>
            <span className={styles.form_text}>{text}</span>
          </div>

          {children}
        </div>
      </form>
    </>
  );
};

export default Form;
