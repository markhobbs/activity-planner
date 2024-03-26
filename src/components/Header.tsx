import React from 'react';
import { Link } from 'react-router-dom';
import Opacity from '@mui/icons-material/Opacity';
import Basket from  './Basket';
import Menu from '../components/Menu';
import styled from 'styled-components';


const Header: React.FC = () => {
  return (
    <Wrapper>
      <Menu />
      <Logo>
        <Link to="/" className="logo">
          <Opacity />{process.env.REACT_APP_TITLE}
        </Link>
        <Link to="/plan" className="right">
          <Basket />
        </Link>
      </Logo>
    </Wrapper>
  );
};

const Wrapper = styled.header``;
const Logo = styled.div`
    text-align: right;
    padding: 1rem 1rem;
`

export default Header;
