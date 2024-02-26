import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { getSerchMovie } from '../../api';
import css from './MoviesPage.module.css';
import clsx from 'clsx';
import { MovieList } from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [params, setParams] = useSearchParams('');
  const [result, setResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const query = params.get('query') ?? '';

  const Changefilter = newFilter => {
    params.set('query', newFilter);
    setParams(params);
  };

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.NavLink, isActive && css.active);
  };

  const handleSearch = evt => {
    evt.preventDefault();
    Changefilter(searchValue);
  };

  useEffect(() => {
    async function fetchMovieQuery() {
      try {
        const response = await getSerchMovie(query);
        setResult(response.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    }

    fetchMovieQuery();
  }, [query]);

  return (
    <div>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          type="text"
          name="movie_search"
          value={searchValue}
          onChange={evt => setSearchValue(evt.target.value)}
          className={css.input}
          placeholder="Write the name of the movie"
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
      <MovieList movies={result} />
    </div>
  );
}
