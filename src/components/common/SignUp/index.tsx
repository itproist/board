import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../../assets/img/user.png';
import styles from './SignUp.module.scss';
import { useAuth } from '../../hook';
import Menu from '../Menu';
import Picture from '../Picture';

const SignUp = () => {
  const { isAuth } = useAuth();
  return !isAuth ? (
    <div className={styles.container}>
      <div className={styles.container_logo}>
        <Picture src={user} alt="user" />
      </div>
      <Link className={styles.container_signup} to="/reg">
        Войти
      </Link>
    </div>
  ) : (
    <Menu user="Профиль" ad="Мои объявления" logout="Выход" />
  );
};

export default SignUp;
