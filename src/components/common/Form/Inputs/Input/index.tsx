import React, { ChangeEvent, Children, useState } from 'react';

type InputPropsType = {
  id: string;
  placeholder: string;
  type: string;
  value: string;
  name: string;
  // setValue: React.Dispatch<React.SetStateAction<string>>;
  className: string;
  children: any;
};

const Input: React.FC<InputPropsType> = ({
  id,
  placeholder,
  className,
  type,
  name,
  value,
  children,
  // setValue,
}) => {
  // const handler = (event: ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };

  return (
    <input
      className={className}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...children}
      // onChange={handler}
    />
  );
};

export default Input;
