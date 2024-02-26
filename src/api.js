import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '3924a3dacaa6ef4b17a703b0df801285';

export const getTrendingMovies = async controller => {
  const url = `trending/movie/day`;
  const options = {
    params: {
      signal: controller.signal,
      api_key: API_KEY,
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
export const getMovieById = async query => {
  const url = `movie/${query}`;
  const options = {
    params: {
      api_key: API_KEY,
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
export const getMovieCast = async query => {
  const url = `/movie/${query}/credits`;
  const options = {
    params: {
      api_key: API_KEY,
    },
  };
  const response = await axios.get(url, options);
  return response.data.cast;
};
export const getSerchMovie = async query => {
  const url = '/search/movie';
  const options = {
    params: {
      query,
      api_key: API_KEY,
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
export const getMovieReview = async query => {
  const url = `/movie/${query}/reviews`;
  const options = {
    params: {
      api_key: API_KEY,
    },
  };
  const response = await axios.get(url, options);
  return response.data.results;
};
