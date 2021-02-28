import React, { useEffect, useState } from "react";
import Pagination from '../components/Pagination';
import Post from '../components/Post';

const url = '/static/posts.json';

export default function App() {
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
    <div>
      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            //pageLimit={5}
            //dataLimit={10}
            pageLimit={4}
            dataLimit={6}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
    </div>
  );
}
