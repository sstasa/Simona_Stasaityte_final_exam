import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Button from '../../components/UI/button/Button';
import css from './NotFoundPage.module.css';

function NotFoundPage(props) {
  return (
    <>
      <Header />
      <section className={`${css.notFound} container`}>
        <h2 className={css.title}>Sorry, Page not found</h2>
        <h3 className={css.subtitle}>
          Uh oh! It seems like the page you are trying to reach does not exist
          😰
        </h3>
        <Link>
          <Button>Go back to homepage</Button>
        </Link>
        <img
          src='../src/assets/404.png'
          alt='unauthorizedImg'
          className={css.notFoundImg}
        ></img>
      </section>
    </>
  );
}
export default NotFoundPage;
