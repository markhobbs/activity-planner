import React, { useEffect, useState } from "react";
import Link from '../components/Link';
import LinkList from '../components/LinkList';
import Pagination from '../components/Pagination';
import Post from '../components/Post';
import { MainContainer } from '../styles';
const url = '/static/posts.json';

const Paginated: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return (
    <MainContainer>
      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
      <LinkList />
    </MainContainer>
  );
}

export default Paginated;