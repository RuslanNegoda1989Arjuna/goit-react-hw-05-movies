// RiHomeHeartFill; RiMovieLine
import { RiHomeHeartFill, RiMovieLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Header, Nav } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home', icon: RiHomeHeartFill },
  { href: 'movies', text: 'Movies', icon: RiMovieLine },
];

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        {navItems.map(({ href, text, icon }) => (
          <Link to={href} key={href}>
            {text}
          </Link>
        ))}
      </Nav>
    </Header>
  );
};
