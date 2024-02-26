import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from '../../api';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';

export default function MovieReviews() {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetchDataId() {
      try {
        setLoading(true);
        const response = await getMovieReview(movieId);
        setReviews(response);
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
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h1>{author}</h1>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie</p>
      )}
    </>
  );
}
