import React from 'react';
import styled from 'styled-components';


const StyledPost = styled.section`
    font-size: 2em;
    margin: 12px 0;
`;

interface PostProps {
  data: Data;
}

interface Data {
  title: string;
  headline: string;
}

const Post: React.FC<PostProps> = (props) => {
  const { title, headline } = props.data;
  return (
    <StyledPost>
      <h3>{ title }</h3>
      <p>{ headline }</p>
    </StyledPost>
  );
}

export default Post;
