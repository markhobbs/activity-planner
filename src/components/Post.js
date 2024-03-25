import React from 'react';

export default function Post(props) {
  const { /*id, img, */title, headline} = props.data;
  return (
    <div className="post">
      {/*<small>{id}</small>
      <img style={{width:'100%'}} alt={title} src={img} />*/}
      <h3>{title}</h3>
      <p>{headline}</p>
    </div>
  );
}
