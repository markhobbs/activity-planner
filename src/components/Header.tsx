import React from 'react';
import { Link } from 'react-router-dom';
import Opacity from '@mui/icons-material/Opacity';
import Basket from  './Basket';
import Menu from '../components/Menu';
import styled from 'styled-components';

const Header = () => {
    return(
        <header className="header">
            <Menu />
            <Container>
                <Link to="/" className="logo">
                    <Opacity />
                    <span>{ process.env.REACT_APP_TITLE }</span>
                </Link>
                <Link to="/plan" className="right">
                    <Basket />
                </Link>
            </Container>
        </header>
    )
}


const Container = styled.div`
    text-align: right;
    padding: 1rem 1rem;
`

export default Header;
