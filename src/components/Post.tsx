import React from 'react';

interface IPostProps {
  data: any;
}

const Post: React.FC<IPostProps> = (props) => {
  const { title, headline } = props.data;
  
  return (
    <div className="post">
      <h3>{ title }</h3>
      <p>{ headline }</p>
    </div>
  );
}

export default Post;
