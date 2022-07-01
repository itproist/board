import React, { ChangeEvent, useState } from 'react';
import Input from '../Input';
import styles from './InputPassword.module.scss';

const InputPassword = () => {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');

  const showPassword = () => {
    if (type === 'password') {
      setType('text');
      // setIcon(`${eyes}`);
    } else {
      setType('password');
      // setIcon(`${lockeyes}`);
    }
  };
  //
  return (
    <Input
      id="password"
      placeholder="Пароль"
      type={type}
      value={password}
      name="password"
      // onChange={(event: any) => event.targer.value}
      className={styles.input}>
      <button type="button">fdfdfd</button>
    </Input>
  );
};

export default InputPassword;
