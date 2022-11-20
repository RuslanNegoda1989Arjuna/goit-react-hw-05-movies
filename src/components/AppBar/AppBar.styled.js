import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px;
  /* margin: 10px; */
`;
export const Nav = styled.nav`
  display: flex;
`;

export const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;

  border-radius: 4px;
  color: black;

  padding: 10px;
  font-size: 22px;

  &.active {
    background-color: orange;
    color: white;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: blue;
  }
`;
