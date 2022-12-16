import { Link } from 'react-router-dom';
import css from './loggedHome.module.css';

function LoggedHome(props) {
  const email = localStorage.getItem('email');
  return (
    <section className={css.loggedHero}>
      <h2 className={css.loggedHeroTitle}>
        Welcome back <span className={css.accent}>{email}</span> !
      </h2>
      <p className={css.subtitle}>What would you like to do?</p>
      <div>
        <button className={css.mainButton}>
          <Link to='/addshop'>Add a new shop</Link>
        </button>
        <button className={css.mainButton}>
          <Link to='/shops'>View all shops</Link>
        </button>
        <img src='../src/assets/heroLogged.png'></img>
      </div>
    </section>
  );
}
export default LoggedHome;
