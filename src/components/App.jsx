import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
