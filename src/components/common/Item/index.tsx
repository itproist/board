import React from 'react';

type ItemPropsType = {
  description: string;
  text: string;
  title?: string;
  city: string;
};

const Item = ({ description, text, title, city }: ItemPropsType) => {
  return (
    <>
      <div>
        <div></div>
        <div>
          <p> {description}</p>
          {text}
        </div>
        <div>
          {title}
          {city}
        </div>
      </div>
    </>
  );
};

export default Item;
