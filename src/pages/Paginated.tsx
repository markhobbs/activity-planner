import React, { useEffect, useState } from "react";
import Pagination from '../components/Pagination';
import Post from '../components/Post';
import Link from '../components/Link';
import styled from 'styled-components';

const url = '/static/posts.json';

const StyledPaginated = styled.main`
    margin: 0 auto;
    padding: 0 10px;
`;

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
    <StyledPaginated>
      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
          <Link 
            page="/planner" 
            children="View Planner" 
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
    </StyledPaginated>
  );
}

export default Paginated;