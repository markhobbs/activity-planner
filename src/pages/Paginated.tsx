import React, { useEffect, useState } from "react";
import Pagination from '../components/Pagination';
import Post from '../components/Post';
import Link from '../components/Link';
import Toggle from '../components/Toggle';
import Switch from '../components/Switch';
const url = '/static/posts.json';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  const goToNextPage = () => {
    console.log("changed");
  }
  
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
          <Toggle 
            onChange={ goToNextPage } 
            data-testid="toggle" />
          <Switch 
            onChange={ goToNextPage } 
            data-testid="switch" />
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