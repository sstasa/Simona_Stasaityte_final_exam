import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Button from '../../components/UI/button/Button';
import css from './NotFoundPage.module.css';

function NotFoundPage(props) {
  return (
    <>
      <Header />
      <section className={`${css.notFound} container`}>
        <div>
          <h2 className={css.fourohfour}>404</h2>
          <h2 className={css.title}>Page not found</h2>
          <h3 className={css.subtitle}>
            Uh oh! It seems like the page you are trying to reach does not exist
            😰
          </h3>
          <Link>
            <Button>Go back to homepage</Button>
          </Link>
        </div>
        <img
          src='../src/assets/notAuth.png'
          alt='unauthorizedImg'
          className={css.notFoundImg}
        ></img>
      </section>
    </>
  );
}
export default NotFoundPage;
