import { Route, Routes } from 'react-router-dom';
import { HeaderBox, HomeLink } from './App.styled';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <div>
      <HeaderBox>
        <nav>
          <HomeLink to="/" end>
            Home
          </HomeLink>
        </nav>
      </HeaderBox>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
