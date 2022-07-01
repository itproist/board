import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <form autoComplete="off">
      <input className={styles.input__search} name="search" type="search" />
      <input className={styles.input__button} value="Искать" type="button" />
    </form>
  );
};

export default Search;
