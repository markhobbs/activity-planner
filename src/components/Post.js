import React from 'react';

function Post(props) {
  //const { id, img, title, headline, desc, rep, meta, rewards, featured } = props.data;
  const { id, img, title, headline} = props.data;

  return (
    <div className="post">
      <small>{id}</small>
      <img style={{width:'100%'}} alt={title} src={img} />
      <h3>{title}</h3>
      <p>{headline}</p>
      {/*<p>{desc}</p>*
      <p>{rep}</p>
      <p>{meta}</p>
      <p>{rewards}</p>
      {/*<p>{kit}</p>
      <p>{featured}</p>*/}
    </div>
  );
}

export default Post;