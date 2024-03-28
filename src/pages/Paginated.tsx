import React, { useEffect, useState } from "react";
import Pagination from '../components/Pagination';
import Post from '../components/Post';
import Link from '../components/Link';

const url = '/static/posts.json';
const App: React.FC = () => {
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
    <div className="container">
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
            page="/plan" 
            children="View Planner" 
          />
        </>
      ) : (
        <h1>No Posts to display</h1>
      )}
    </div>
  );
}

export default App;