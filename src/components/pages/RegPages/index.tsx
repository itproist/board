import React, { useEffect, useState } from 'react';
import styles from './RegPages.module.scss';
import Form from '../../common/Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlices';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import eyes from '../../../assets/img/eyes/eyes.png';
import lockeyes from '../../../assets/img/eyes/eyeslock.png';

const RegPages = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [type, setType] = useState('text');
  const [icon, setIcon] = useState(`${lockeyes}`);
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const showPassword = () => {
    if (type === 'password') {
      setType('text');
      setIcon(`${eyes}`);
    } else {
      setType('password');
      setIcon(`${lockeyes}`);
    }
  };

  const handler = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        });
        navigate('/auth');
      })
      .catch(console.error);
  };

  const blurHandler = (event: any) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (event: any) => {
    setEmail(event.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError('Некорректный Email');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6 || event.target.value.length > 25) {
      setPasswordError('Пароль должен быть не менее 6 символов и не более 25 сивмолов');
      if (!event.target.value) {
        setPasswordError('Пароль не может быть пустым');
      }
    } else {
      setPasswordError('');
    }
  };

  return (
    <Form content="Hello, world!" text="Создайте аккаунт">
      <div className={styles.form_exit}>
        <div className={styles.border}>
          <Link to="/reg">Регистрация</Link>
        </div>
        <div>
          <div>
            <Link to="/auth">Авторизация</Link>
          </div>
        </div>
      </div>
      {emailDirty && emailError && <div className={styles.emailerror}>{emailError}</div>}
      <input
        className={styles.input_email}
        onChange={(event) => emailHandler(event)}
        value={email}
        onBlur={(event) => blurHandler(event)}
        name="email"
        type="email"
        placeholder="Email"
      />
      {passwordDirty && passwordError && (
        <div className={styles.passworderror}>{passwordError}</div>
      )}
      <div className={styles.psg}>
        <div>
          <input
            className={styles.input_password}
            onChange={(event) => passwordHandler(event)}
            value={password}
            onBlur={(event) => blurHandler(event)}
            name="password"
            type={type}
            placeholder="Пароль"
          />
        </div>
        <div>
          <button className={styles.btn_button} type="button" onClick={showPassword}>
            <img src={icon} alt="" />
          </button>
        </div>
      </div>

      <button
        disabled={!formValid}
        className={styles.register_button}
        type="button"
        onClick={handler}>
        Создать аккаунт
      </button>
    </Form>
  );
};

export default RegPages;
