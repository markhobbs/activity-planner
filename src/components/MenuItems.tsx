import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledMenu = styled.div<{ open: boolean }>`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #EFFFFA;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 50%;

  @media (max-width: 576px) {
      width: 80%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

interface IMenuItemsProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const MenuItems: React.FC<IMenuItemsProps> = ({ open, setOpen }) => {
  return (
    <StyledMenu 
      data-testid="menu-items"
      open={ open } 
      onClick={ () => setOpen(!open) }
      >
        <Link to="/">Activitys</Link>
        <Link to="/planner">Planner</Link>
        <Link to="/awards">Awards</Link>
        <Link to="/about"><small>About</small></Link>
        <Link to="/paginated"><small>Paginated</small></Link>
    </StyledMenu>
  );
};

export default MenuItems;
