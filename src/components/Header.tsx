import React from 'react';
import { Link } from 'react-router-dom';
import Basket from  './Basket';
import Menu from '../components/Menu';
import Opacity from '@mui/icons-material/Opacity';
import styled from 'styled-components';


const Logo = styled.div`
    text-align: right;
    padding: 1rem 1rem;
`
const StyledHeader = styled.header`
`;

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
