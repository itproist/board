import React from 'react';

const Button = ({ title, ...props }) => {
  return (
    <button {...props} type="button">
      {title}
    </button>
  );
};

export default Button;
