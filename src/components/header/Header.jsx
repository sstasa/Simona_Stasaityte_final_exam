import { Link } from 'react-router-dom';
import css from './Header.module.css';

function Header(props) {
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
          <li className={css.navLink}>
            <Link to='/addshop'>Add Shop</Link>
          </li>
          <li className={css.navLink}>
            <Link to='/shops'>Shops</Link>
          </li>
          <li className={css.navLink}>
            <Link to='/login'>Login</Link>
          </li>
          <li className={css.navLink}>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
