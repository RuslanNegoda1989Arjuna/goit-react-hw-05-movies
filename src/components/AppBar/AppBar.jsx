import { RiHomeHeartFill, RiMovieLine } from 'react-icons/ri';

import { Header, Nav, NavLinks } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home', icon: RiHomeHeartFill },
  { href: 'movies', text: 'Movies', icon: RiMovieLine },
];

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        {navItems.map(({ href, text, icon: Icon }) => (
          <NavLinks to={href} key={href}>
            <Icon size={22} />
            {text}
          </NavLinks>
        ))}
      </Nav>
    </Header>
  );
};
