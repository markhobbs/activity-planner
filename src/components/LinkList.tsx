import React from "react";
import { Link } from 'react-router-dom';
import Context from './../Context';

const LinkList: React.FC = () => {
  return (
    <p>
      Visit the <Link to="/">{ Context.ACTIVATIES_HEADING }</Link>
      , <Link to="/planner">{ Context.PLAN_HEADING }</Link>
      , or the <Link to="/awards">{ Context.AWARDS_HEADING }</Link> pages.
    </p>  
  );
};

export default LinkList;
