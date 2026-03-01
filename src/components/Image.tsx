import React from "react";


interface ImageProps {
  alt: string;
  src: string;
}

const Image: React.FC<ImageProps> = ({ alt, src }) => {
  return (
    <img alt={alt} src={src} srcSet={`${src} 300w, ${src} 768w, ${src} 1280w`} />
  );
};

export default Image;
