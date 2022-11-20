import { Route, Routes } from 'react-router-dom';
import { HeaderBox, HomeLink } from './App.styled';
import { Home } from './Home/Home';
import { Layout } from './Layout/Layout';
import { MovieDetails } from './MovieDetails/MovieDetails';

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
        <Route path="/" element={<Layout />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:Id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};
