import SingleShopCard from '../singleShopCard/SingleShopCard';
import { useFetch } from '../../helpers/helpers';
import { useState } from 'react';
import css from './AllShops.module.css';
import { Link } from 'react-router-dom';

function AllShops(props) {
  let url = `${import.meta.env.VITE_DB_URL}/firePost/shops.json`;
  let shops = useFetch(url);
  const [noShops, setNoShops] = useState(false);
  let shopsArr = [];

  if ((shops = [] && !noShops)) {
    setNoShops(true);
  } else {
    shopsArr = Object.values(shops);
    console.log(shopsArr);
  }
  const [shopsLoading, setShopsLoading] = useState(true);
  if (shopsArr.length > 0 && shopsLoading) {
    setShopsLoading(false);
  }

  return (
    <section className={`${css.shopsSection} container`}>
      <h2>Shops</h2>
      {!noShops && <p>{shopsArr.length}</p>}
      {shopsLoading && !noShops && <h2>Loading...</h2>}
      {noShops && (
        <div className={css.noShops}>
          <div className={css.leftSide}>
            <h2 className={css.noShopsTitle}>
              Sorry, we did not find any created shops..
            </h2>
            <p>Try adding a new shop to get started.</p>
            <Link>
              <button className={css.mainButton}>Create one here</button>
            </Link>
          </div>
          <img
            src='../src/assets/shrug.png'
            alt='not found image'
            className={css.notFoundImg}
          ></img>
        </div>
      )}
      {!noShops && (
        <ul>
          {shopsArr.map((shopObj) => (
            <SingleShopCard
              key={shopObj.postId}
              description={shopObj.description}
              imageUrl={shopObj.imageUrl}
              shopName={shopObj.shopName}
              startYear={shopObj.startYear}
              town={shopObj.town}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
export default AllShops;
