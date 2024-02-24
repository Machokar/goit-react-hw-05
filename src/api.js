import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async controller => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWM0ZGRlOWVmZDkxZDQyODRiMzI1YmZiOWRjYjZiYiIsInN1YiI6IjY1Y2JiNjZkOGM0NGI5MDE4MDk0MTU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uprme_0UI87pLZa_NGdmKRSH8vOt8labpp7A0pO3uvA',
    },
  };
  const response = await axios.get('trending/movie/day', options);
  return response.data;
};
export const getMovieById = async (controller, id) => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWM0ZGRlOWVmZDkxZDQyODRiMzI1YmZiOWRjYjZiYiIsInN1YiI6IjY1Y2JiNjZkOGM0NGI5MDE4MDk0MTU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uprme_0UI87pLZa_NGdmKRSH8vOt8labpp7A0pO3uvA',
    },
  };
  const response = await axios.get(`movie/${id}`, options);
  return response.data;
};
export const getMovieCast = async (controller, id) => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWM0ZGRlOWVmZDkxZDQyODRiMzI1YmZiOWRjYjZiYiIsInN1YiI6IjY1Y2JiNjZkOGM0NGI5MDE4MDk0MTU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uprme_0UI87pLZa_NGdmKRSH8vOt8labpp7A0pO3uvA',
    },
  };
  const response = await axios.get(`movie/${id}/credits`, options);
  return response.data;
};
