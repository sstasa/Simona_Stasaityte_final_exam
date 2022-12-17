import SingleShopCard from '../singleShopCard/SingleShopCard';
import { useFetch } from '../../helpers/helpers';
import { useState } from 'react';
import css from './AllShops.module.css';
import NoShopsFound from '../noShopsFound/NoShopsFound';

function AllShops(props) {
  let url = `${import.meta.env.VITE_DB_URL}/firePost/shops.json`;
  let shops = useFetch(url);
  const [shopsArr, setShopsArr] = useState([]);
  const [shopsLoading, setShopsLoading] = useState(true);
  const [shopsEmpty, setShopsEmpty] = useState(false);

  if (shops && !shopsArr) {
    setShopsArr(Object.values(shops));
  }

  if (shopsArr.length > 0 && shopsLoading) {
    setShopsLoading(false);
  } else if (shopsArr.length == 0 && !shopsEmpty) {
    setShopsEmpty(true);
    setShopsLoading(false);
  }
  return (
    <section className={`${css.shopsSection} container`}>
      <div className={css.sectionTitle}>
        <h2>Shops</h2>
        <p className={css.shopCount}>{shopsArr.length} shops</p>
        {shopsLoading && <h2>Loading...</h2>}
      </div>
      {shopsEmpty && <NoShopsFound />}
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
