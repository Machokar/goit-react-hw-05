import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
const MoviesPage = React.lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = React.lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
const MovieCast = React.lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = React.lazy(() => import('./components/MovieReviews/MovieReviews'));
export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
