import { useEffect, useState } from 'react';
import { getMovieCast } from '../../api';
import { useParams } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';
export default function MovieCast() {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [casts, setCasts] = useState([]);
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  useEffect(() => {
    async function fetchDataId() {
      try {
        setLoading(true);
        const response = await getMovieCast(movieId);
        setCasts(response);
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
    <>
      {error && <Error />}
      {loading && <Loading />}
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : defaultImg
              }
              width={200}
              alt={cast.name}
            />
            <p>{cast.name}</p>
            <p>Character:{cast.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
