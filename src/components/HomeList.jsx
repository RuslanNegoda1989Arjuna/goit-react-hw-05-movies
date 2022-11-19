import { Link } from 'react-router-dom';

export const HomeList = ({ trendFilms }) => {
  if (!trendFilms) {
    return;
  }
  return (
    <div>
      <ul>
        {trendFilms.map(({ original_name, original_title }) => {
          console.log('original_name', original_name);
          return (
            <li key={original_name || original_title}>
              <Link to={`${original_name || original_title}`}>
                <h3>{original_name || original_title}</h3>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
