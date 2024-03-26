import React from 'react';

export default function Post(props) {
  const { title, headline } = props.data;
  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{headline}</p>
    </div>
  );
}
