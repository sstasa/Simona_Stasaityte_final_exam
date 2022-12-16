import { Link } from 'react-router-dom';
import css from './Header.module.css';
import { useHistory } from 'react-router-dom';

function Header(props) {
  let id = localStorage.getItem('idToken');
  let email = localStorage.getItem('email');
  const history = useHistory();

  function handleLogout() {
    localStorage.clear();
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
          {id && (
            <>
              <li className={css.navLink}>
                <Link to='/addshop'>Add Shop</Link>
              </li>
              <li className={css.navLink}>
                <Link to='/shops'>Shops</Link>
              </li>
              <li className={css.navLink}>
                Logged in as <span>{email}</span>
              </li>
              <button onClick={handleLogout}>Log out</button>
            </>
          )}
          {!id && (
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
