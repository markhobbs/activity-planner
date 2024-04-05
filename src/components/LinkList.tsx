import React from "react";
import { Link } from 'react-router-dom';


const LinkList: React.FC = () => {
  const { 
    REACT_APP_ACTIVATIES_HEADING, 
    REACT_APP_PLAN_HEADING, 
    REACT_APP_AWARDS_HEADING 
  } = process.env;
  return (
    <p>
      Visit the <Link to="/">{ REACT_APP_ACTIVATIES_HEADING }</Link>
      , <Link to="/planner">{ REACT_APP_PLAN_HEADING }</Link>
      , or the <Link to="/awards">{ REACT_APP_AWARDS_HEADING }</Link> pages.
    </p>  
  );
};

export default LinkList;
