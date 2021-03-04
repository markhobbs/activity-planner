import React from 'react';
import { Link } from 'react-router-dom';
import OpacityIcon from '@material-ui/icons/Opacity';
import Basket from  './Basket';
import Menu from '../components/Menu';

const Header = () => {
    return(
        <header className="header">
            <Menu />
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
