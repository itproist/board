import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/img/logo.png';
import Button from '../Button';
import SignUp from '../SignUp';
import Search from '../Search';
import { Link } from 'react-router-dom';
import Picture from '../Picture';
import { useAuth } from '../../hook';

const Header = () => {
  const { isAuth } = useAuth();
  return (
    <>
      <header className={styles.header}>
        <div>
          <Link to="/">
            <Picture src={logo} alt="logo" />
          </Link>
        </div>
        <Search />
        <Link to="/ad">
          <Button title="Подать объявление" />
        </Link>
        <SignUp />
      </header>
    </>
  );
};

export default Header;
