import { Link } from 'react-router-dom';
import css from './Header.module.css';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../helpers/UserContext';
import { toast } from 'react-hot-toast';
import Button from '../UI/button/Button';

function Header(props) {
  const user = useUser();
  const history = useHistory();

  function handleLogout() {
    user.logout();
    toast.dismiss();
    history.push('/login');
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
              <Button onClick={handleLogout}>Log out</Button>
            </>
          )}
          {!user.isUserLoggedIn && (
            <div className={css.headerButtons}>
              <Link to='/login'>
                <Button>Login</Button>
              </Link>
              <Link to='/register'>
                <Button styleType='alt'>Register</Button>
              </Link>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default Header;
