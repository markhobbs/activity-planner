import React from 'react';
/*import Box from '@material-ui/core/Box';
<Box component="p" className="footer center" m={1}></Box>*/

const Footer = () => {
    return (
        <footer className="footer center">
            &copy; { process.env.REACT_APP_TITLE } 2020
        </footer>
    )
}

export default Footer;
