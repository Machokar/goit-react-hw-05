import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from '../../api';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';
import { Pagedetail } from '../../components/Pagedetail/Pagedetail';
import Movie from './MovieCast';
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [moviedetails, setMoviedetails] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchDataId() {
      try {
        setLoading(true);
        const response = await getMovieById(controller, movieId);
        setMoviedetails(response);
        console.log(response);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchDataId();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {moviedetails && <Pagedetail pagedetail={moviedetails} />}
      {error && <Error />}
      {loading && <Loading />}
      <Link to="Cast">{<Movie />}</Link>
      <Link to="Reviews">Reviews</Link>
      <Outlet />
    </div>
  );
}
