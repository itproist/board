import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import styles from './PageWrapper.module.scss';

const PageWrapper = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.page_main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
