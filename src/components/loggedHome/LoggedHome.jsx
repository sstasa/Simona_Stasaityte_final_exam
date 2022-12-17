import { Link } from 'react-router-dom';
import { useUser } from '../../helpers/UserContext';
import css from './loggedHome.module.css';

function LoggedHome(props) {
  const user = useUser();
  return (
    <section className={`container`}>
      <div className={css.loggedHero}>
        <div>
          <h2 className={css.loggedHeroTitle}>
            Welcome back <span className={css.accent}>{user.email}</span> !
          </h2>
          <p className={css.subtitle}>What would you like to do?</p>
          <div>
            <button className={css.mainButton}>
              <Link to='/addshop'>Add a new shop</Link>
            </button>
            <button className={css.mainButton}>
              <Link to='/shops'>View all shops</Link>
            </button>
          </div>
        </div>
        <img src='../src/assets/heroLogged.png'></img>
      </div>
    </section>
  );
}
export default LoggedHome;
