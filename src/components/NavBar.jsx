import { Link } from 'react-scroll';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Menu>
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
        <MenuItem>
          <Link
            to='social'
            smooth={true}
            duration={1000}
          >
            Socials
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
  width: 100%;
  z-index: 1000;
  color: #111;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const MenuItem = styled.li`
  list-style: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default Navbar;
