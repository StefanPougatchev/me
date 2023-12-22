import { Link } from 'react-scroll';
import styled from 'styled-components';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <Link
            to='about'
            smooth={true}
            duration={1000}
          >
            About Me
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to='work'
            smooth={true}
            duration={1000}
          >
            My Work
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to='resume'
            smooth={true}
            duration={1000}
          >
            Resume
          </Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  width: 100%;
  z-index: 1000;
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    padding: 2rem;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease-in-out;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Navbar;
