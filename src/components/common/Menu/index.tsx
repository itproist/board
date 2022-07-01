import React from 'react';
import { Link } from 'react-router-dom';
import { clearUser } from '../../../store/slices/userSlices';
import styles from './Menu.module.scss';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hook';
import users from '../../../assets/img/user.png';

type MenuPropsType = {
  user?: string;
  ad: string;
  logout: string;
};

const Menu = ({ user, ad, logout }: MenuPropsType) => {
  const { email } = useAuth();
  const dispatch = useDispatch();
  return (
    <div className={styles.menu}>
      <div className={styles.menu_user}>
        <p>{user}</p>
      </div>
      <div className={styles.menu_content}>
        <div className={styles.menu_email}>{email}</div>
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
