import React from 'react';

type PicturePropsType = {
  src: string;
  alt: string;
  onClick?: () => void;
};

const Picture = ({ src, alt, onClick }: PicturePropsType) => {
  return <img src={src} alt={alt} onClick={onClick} />;
};

export default Picture;
