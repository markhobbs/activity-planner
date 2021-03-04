import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
      //width: 100%;
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

const MenuItems = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">Activitys</Link>
      <Link to="/plan">Planner</Link>
      <Link to="/awards">Awards</Link>
      <p>Or</p>
      <Link to="/about"><small>About</small></Link>
      <Link to="/paginated"><small>Paginated</small></Link>
      {/*<a href="/"><span role="img" aria-label="about us">Activitys</span>Activitys</a>
      <a href="/plan"><span role="img" aria-label="price">Planner</span>Planner</a>
      <a href="/awards"><span role="img" aria-label="contact">Achievements</span>Awards</a>*/}
      </StyledMenu>
  )
}

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
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
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

const Menu = () => {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div data-testid="menu">
      <div>
        {/*<h1>Menu</h1>
        <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
        <small>Icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
       */}</div>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <MenuItems open={open} setOpen={setOpen} />
      </div>
    </div>
  )  
}

//ReactDOM.render(<App />, document.getElementById('app'));
/*const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};*/

export default Menu;
