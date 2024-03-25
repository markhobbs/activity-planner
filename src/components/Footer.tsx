import React from 'react';

const Footer = () => {
    return (
        <footer className="footer center">
            &copy; { process.env.REACT_APP_TITLE } 2024
        </footer>
    )
}

export default Footer;
