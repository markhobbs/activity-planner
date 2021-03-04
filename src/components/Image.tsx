import React from "react";

/*const small = '_300.jpg';
const medium = '_768.jpg';
const large = '_1280.jpg';*/

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
    //<img alt={alt} src={src+small} srcSet={`${src+small} 300w, ${src+medium} 768w, ${src+large} 1280w`} />
  }
}

export default Image;
