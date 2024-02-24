import './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './pages/Navigation/Navigation';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import MovieCast from './components/MovieCast';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="Cast" element={<MovieCast />} />
          <Route path="Reviews" element={<div>cAR</div>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
