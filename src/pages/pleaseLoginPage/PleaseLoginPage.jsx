import { Link } from 'react-router-dom';
import css from './PleaseLoginPage.module.css';
function PleaseLoginPage(props) {
  return (
    <div className={css.section}>
      <h2 className={css.title}>Uh oh!</h2>
      <h3>This page is only for logged in users!</h3>
      <Link to='/login' className={css.link}>
        <button className={css.mainButton}>Log in</button>
      </Link>

      <p className={css.redirect}>
        Don't have an account yet?{' '}
        <Link to='/register' className={css.link}>
          Create one here
        </Link>
      </p>
    </div>
  );
}
export default PleaseLoginPage;
