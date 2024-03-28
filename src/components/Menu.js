import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMenu = styled.nav`
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

const StyledBurger = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 3;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;

    background: ${({ open }) => open ? '#0D0C1D' : '#0D0C1D'};
    border-color: ${({ open }) => open ? '#0D0C1D' : '#0D0C1D'};

    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const MenuItems = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <Link to="/">Activitys</Link>
      <Link to="/planner">Planner</Link>
      <Link to="/awards">Awards</Link>
      <Link to="/about"><small>About</small></Link>
      <Link to="/paginated"><small>Paginated</small></Link>
      </StyledMenu>
  )
}

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div data-testid="menu">
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuItems open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
}

export default Menu;