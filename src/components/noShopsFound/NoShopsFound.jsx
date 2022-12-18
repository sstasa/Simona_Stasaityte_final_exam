import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import css from './NoShopsFound.module.css';
function NoShopsFound(props) {
  return (
    <div className={css.noShops}>
      <div className={css.leftSide}>
        <h2 className={css.noShopsTitle}>
          Sorry, we did not find any created shops..
        </h2>
        <p className={css.subtitle}>Try adding a new shop to get started.</p>
        <Button>
          <Link to='/addShop'>Create one here</Link>
        </Button>
      </div>
      <img
        src='../src/assets/shrug.webp'
        alt='not found image'
        className={css.notFoundImg}
      ></img>
    </div>
  );
}
export default NoShopsFound;
