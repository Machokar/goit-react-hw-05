import { NavLink } from 'react-router-dom';
import css from './Pagedetail.module.css';
export const Pagedetail = ({ pagedetail }) => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div className={css.detailpage_box}>
      <div className={css.button_img_items}>
        <NavLink to={'/'}>
          <button className={css.button_back_page}>Back to home page</button>
        </NavLink>
        <img
          className={css.main_img}
          src={
            pagedetail.poster_path
              ? `https://image.tmdb.org/t/p/w500${pagedetail.poster_path}`
              : defaultImg
          }
          alt={pagedetail.original_title}
        />
      </div>
      <div className={css.detail_information}>
        <h1>{pagedetail.title}</h1>
        <p>
          User Score:
          <span className={css.percents}>{`${Math.round(
            (pagedetail.vote_average / 10) * 100
          )}%`}</span>{' '}
        </p>
        <h2>Overview</h2>
        <p className={css.overview}>{pagedetail.overview}</p>
        <h3>Genres</h3>
        <ul className={css.genres}>
          {pagedetail.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
