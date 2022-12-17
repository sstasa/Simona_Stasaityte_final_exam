import { Link } from 'react-router-dom';
import css from './Header.module.css';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../helpers/UserContext';
import { toast } from 'react-hot-toast';

function Header(props) {
  const user = useUser();
  const history = useHistory();

  function handleLogout() {
    user.logout();
    toast('See you next time!', {
      icon: '👏',
    });
    history.push('/');
  }
  return (
    <header className={css.header}>
      <Link to='/'>
        <div className={css.logo}>
          <i className={`${css.logoIcon} fa fa-grav`} aria-hidden='true'></i>{' '}
          Company
        </div>
      </Link>
      <nav>
        <ul>
          {user.isUserLoggedIn && (
            <>
              <li className={css.navLink}>
                <Link to='/addshop'>Add Shop</Link>
              </li>
              <li className={css.navLink}>
                <Link to='/shops'>Shops</Link>
              </li>
              <li className={css.navLink}>
                Logged in as <span>{user.emailValue}</span>
              </li>
              <button onClick={handleLogout} className={css.mainButton}>
                Log out
              </button>
            </>
          )}
          {!user.isUserLoggedIn && (
            <>
              <li className={css.navLink}>
                <Link to='/login'>Login</Link>
              </li>
              <li className={css.navLink}>
                <Link to='/register'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
