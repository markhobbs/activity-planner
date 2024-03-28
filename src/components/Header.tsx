import React from 'react';
import { Link } from 'react-router-dom';
import Opacity from '@mui/icons-material/Opacity';
import Basket from  './Basket';
import Menu from '../components/Menu';
import styled from 'styled-components';

const StyledHeader = styled.header``;
const Logo = styled.div`
    text-align: right;
    padding: 1rem 1rem;
`
const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Menu />
      <Logo>
        <Link to="/" className="logo">
          <Opacity />
          {process.env.REACT_APP_TITLE}
        </Link>
        <Link to="/planner" className="right">
          <Basket />
        </Link>
      </Logo>
    </StyledHeader>
  );
};

export default Header;