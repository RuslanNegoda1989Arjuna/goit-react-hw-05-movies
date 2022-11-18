import { Link } from 'react-router-dom';

export const HomeList = ({ trendFilms }) => {
  console.log(trendFilms);
  return (
    <div>
      <ul>
        {trendFilms.map(({ original_name }) => {
          return (
            <li key={original_name}>
              <Link to={`${original_name}`}>
                <h3>{original_name}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
