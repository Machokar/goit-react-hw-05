import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './HomePage.module.css';
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.NavLink, isActive && css.active);
  };
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const response = await getTrendingMovies(controller);
        setMovies(response.results);
        setLoading(true);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h1 className={css.title}>Home page</h1>
      {error && <Error />}
      {loading && <Loading />}
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id} className={css.homepage_item}>
              <NavLink to={`/movies/${movie.id}`} className={buildLinkClass}>
                {movie.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
