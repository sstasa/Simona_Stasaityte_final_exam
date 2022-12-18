import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Button from '../../components/UI/button/Button';
import { useUser } from '../../helpers/UserContext';
import css from './PleaseLoginPage.module.css';
function PleaseLoginPage(props) {
  const user = useUser();
  return (
    <>
      <Header />
      <div className={css.section}>
        <h2 className={css.title}>Uh oh!</h2>
        <h3>
          This page is only for {user.isUserLoggedIn ? 'new' : 'logged in'}{' '}
          users!
        </h3>
        <img
          src='../src/assets/notAuth.png'
          alt='unauthorizedImg'
          className={css.authImg}
        ></img>
        {user.isUserLoggedIn ? (
          <Link to='/'>
            <Button>Go back to home page</Button>
          </Link>
        ) : (
          <>
            <Link to='/login' className={css.link}>
              <Button>Log in</Button>
            </Link>
            <p className={css.redirect}>
              Don't have an account yet?{' '}
              <Link to='/register' className={css.link}>
                Create one here
              </Link>
            </p>
          </>
        )}
      </div>
    </>
  );
}
export default PleaseLoginPage;
