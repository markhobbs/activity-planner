import React from 'react';
import { Link } from 'react-router-dom';
/*import Box from '@material-ui/core/Box';
<Box component="p" className="footer center" m={1}></Box>*/

const Footer = () => {
    return (
        <footer className="footer center">
            <Link to="/">&copy; { process.env.REACT_APP_TITLE } 2020 </Link> :: <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer;
