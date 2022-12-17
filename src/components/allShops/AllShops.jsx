import SingleShopCard from '../singleShopCard/SingleShopCard';
import { useFetch } from '../../helpers/helpers';
import { useState } from 'react';
import css from './AllShops.module.css';
import NoShopsFound from '../noShopsFound/NoShopsFound';

function AllShops(props) {
  let url = `${import.meta.env.VITE_DB_URL}/firePost/shops.json`;
  let shops = useFetch(url);
  let shopsArr = Object.values(shops);
  const [shopsLoading, setShopsLoading] = useState(true);

  if (shopsArr.length > 0 && shopsLoading) {
    setShopsLoading(false);
  }

  return (
    <section className={`${css.shopsSection} container`}>
      <div className={css.sectionTitle}>
        <h2>Shops</h2>
        <p className={css.shopCount}>{shopsArr.length} shops</p>
        {shopsLoading && <h2>Loading...</h2>}
      </div>
      {/* <NoShopsFound /> */}
      <ul className={css.shopsList}>
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
    </section>
  );
}
export default AllShops;
