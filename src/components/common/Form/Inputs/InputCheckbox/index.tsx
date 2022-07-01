import React from 'react';

type InputCheckboxPropsType = {
  id: string;
  className: string;
  type: string;
};

const InputCheckbox = ({ className, id, type }: InputCheckboxPropsType) => {
  return (
    <>
      <label htmlFor={id}>
        <input type={type} className={className} id={id} />
      </label>
    </>
  );
};

export default InputCheckbox;
