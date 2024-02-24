import { useEffect, useState } from 'react';
import { getMovieCast } from '../api';
import { useParams } from 'react-router-dom';
import { Loading } from './Loading/Loading';
import { Error } from './Error/Error';

export default function MovieCast() {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [custs, setCusts] = useState([]);
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  useEffect(() => {
    const controller = new AbortController();
    async function fetchDataId() {
      try {
        setLoading(true);
        const response = await getMovieCast(controller, movieId);
        setCusts(response);
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
    <>
      {error && <Error />}
      {loading && <Loading />}
      <ul>
        {custs.map(({ id, name, profile_path, character }) => (
          <li key={id}>
            <img
              src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : defaultImg}
              width={200}
              alt={name}
            />
            <p>{name}</p>
            <p>Character:{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
