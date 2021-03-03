import React from 'react';
import { Link } from 'react-router-dom';
import OpacityIcon from '@material-ui/icons/Opacity';
import Basket from  './Basket';

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <OpacityIcon /><span>{ process.env.REACT_APP_TITLE }</span>
                </Link>
                <Link to="/plan" className="right">
                    <Basket />
                </Link>
                </div>
        </header>
    )
}

export default Header;
