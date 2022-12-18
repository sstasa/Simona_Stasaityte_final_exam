import { Link } from 'react-router-dom';
import { useUser } from '../../helpers/UserContext';
import Button from '../UI/button/Button';
import css from './loggedHome.module.css';

function LoggedHome(props) {
  const user = useUser();
  return (
    <section className={`container`}>
      <div className={css.loggedHero}>
        <div>
          <h2 className={css.loggedHeroTitle}>
            Welcome back, <span className={css.accent}>{user.emailValue}</span>{' '}
            !
          </h2>
          <p className={css.subtitle}>
            Glad to have you back! What would you like to do?
          </p>
          <div className={css.buttons}>
            <Button>
              <Link to='/addshop'>Add a new shop</Link>
            </Button>
            <Button>
              <Link to='/shops'>View all shops</Link>
            </Button>
          </div>
        </div>
        <img src='../src/assets/heroLogged.png'></img>
      </div>
    </section>
  );
}
export default LoggedHome;
