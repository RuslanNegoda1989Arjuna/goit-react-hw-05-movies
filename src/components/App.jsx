import { Route, Routes } from 'react-router-dom';
import fetchTrending from 'tools/Api';
import { Home } from './Home/Home';

export const App = () => {
  const data = fetchTrending();
  data.then(data => {
    console.log(data);
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
