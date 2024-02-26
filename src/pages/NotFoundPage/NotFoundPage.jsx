import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');
  return (
    <div>
      <h1>Sorry, we did not get page</h1>
      <NavLink to={goBack.current}>
        <button className={css.not_found_button}>Back to home page</button>
      </NavLink>
    </div>
  );
}
