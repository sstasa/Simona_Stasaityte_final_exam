import { Link } from 'react-router-dom';
import css from './NoShopsFound.module.css';
function NoShopsFound(props) {
  return (
    <div className={css.noShops}>
      <div className={css.leftSide}>
        <h2 className={css.noShopsTitle}>
          Sorry, we did not find any created shops..
        </h2>
        <p className={css.subtitle}>Try adding a new shop to get started.</p>
        <Link to='/addShop'>
          <button className={css.mainButton}>Create one here</button>
        </Link>
      </div>
      <img
        src='../src/assets/shrug.png'
        alt='not found image'
        className={css.notFoundImg}
      ></img>
    </div>
  );
}
export default NoShopsFound;
