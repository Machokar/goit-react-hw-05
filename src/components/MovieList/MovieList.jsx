import { NavLink, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import clsx from 'clsx';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.NavLink, isActive && css.active);
  };
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id} className={css.homepage_item}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }} className={buildLinkClass}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
