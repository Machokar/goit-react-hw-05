import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from '../../api';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';
import { Pagedetail } from '../../components/Pagedetail/Pagedetail';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [moviedetails, setMoviedetails] = useState(null);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.NavLink, isActive && css.active);
  };
  useEffect(() => {
    async function fetchDataId() {
      try {
        setLoading(true);
        const response = await getMovieById(movieId);
        setMoviedetails(response);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchDataId();
  }, [movieId]);

  return (
    <div>
      {moviedetails && <Pagedetail pagedetail={moviedetails} />}
      {error && <Error />}
      {loading && <Loading />}
      <div className={css.box_nawlink}>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
