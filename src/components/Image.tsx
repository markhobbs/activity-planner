import React from "react";

interface IImageProps {
  alt: string;
  src: string;
}

class Image extends React.Component<IImageProps> {
  render () {
    let alt = this.props.alt;
    let src = this.props.src;
    return (
      <img alt={alt} src={src} srcSet={`${src} 300w, ${src} 768w, ${src} 1280w`} />
    );
  }
}

export default Image;
