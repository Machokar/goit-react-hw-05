import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../fetchAPI';
import { CastList } from '../CastList/CastList';

export default function Movie() {
  const [casts, setCasts] = useState([]);
  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    const controller = new AbortController();
    async function fetchDataCast() {
      try {
        const response = await getMovieCast(controller, id);
        setCasts(response.cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error);
        }
      }
    }

    fetchDataCast();
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <div className={css.container}>
      <CastList data={casts} />
    </div>
  );
}
