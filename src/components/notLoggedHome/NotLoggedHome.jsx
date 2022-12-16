import { Link } from 'react-router-dom';
import css from './notLoggedHome.module.css';

function NotLoggedHome(props) {
  return (
    <section className={css.hero}>
      <div>
        <h1 className={css.heroTitle}>
          Get your shops launched with{' '}
          <span className={css.accent}>Company</span>
        </h1>
        <p className={css.subtitle}>
          We provide the best service for your shops
        </p>
        <button className={css.mainButton}>
          <Link to='register'>Get started</Link>
        </button>
      </div>
      <img src='../src/assets/hero.png' className={css.heroImg}></img>
    </section>
  );
}
export default NotLoggedHome;
