import { Link, useLocation } from 'react-router-dom';
import { FilmName } from './HomeList.styled';

export const HomeList = ({ trendFilms }) => {
  const location = useLocation();
  if (!trendFilms) {
    return;
  }
  return (
    <div>
      <ul>
        {trendFilms.map(({ original_name, original_title, id }) => {
          return (
            <li key={id} id={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <FilmName>{original_name || original_title}</FilmName>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
