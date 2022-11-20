import { Link } from 'react-router-dom';
import { FilmName } from './HomeList.styled';

export const HomeList = ({ trendFilms }) => {
  if (!trendFilms) {
    return;
  }
  return (
    <div>
      <ul>
        {trendFilms.map(({ original_name, original_title, id }) => {
          return (
            <li key={original_name || original_title} id={id}>
              <Link to={`${original_name || original_title}`}>
                <FilmName>{original_name || original_title}</FilmName>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
