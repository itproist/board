import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearUser } from '../../../../store/slices/userSlices';
import { useAuth } from '../../../hook';
import styles from './Menu.module.scss';

type MenuPropsType = {
  ad: string;
  logout: string;
};

const Menu = ({ ad, logout }: MenuPropsType) => {
  const { email } = useAuth();
  const dispatch = useDispatch();
  return (
    <div className={styles.menu}>
      <div className={styles.menu_content}>
        <p className={styles.menu_email}>{email}</p>

        <div className={styles.menu_book}>
          <Link to="/ad">{ad}</Link>
        </div>

        <div className={styles.menu_exit}>
          <Link onClick={() => dispatch(clearUser())} to="/">
            {logout}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
