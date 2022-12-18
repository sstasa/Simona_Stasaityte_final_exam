import SingleShopCard from '../singleShopCard/SingleShopCard';
import { useState } from 'react';
import css from './AllShops.module.css';
import NoShopsFound from '../noShopsFound/NoShopsFound';
import { useEffect } from 'react';

function AllShops(props) {
  let url = `${import.meta.env.VITE_DB_URL}/firePost/shops.json`;
  const [shopsArr, setShopsArr] = useState([]);
  const [shopsLoading, setShopsLoading] = useState(true);

  useEffect(() => {
    async function fetchShops() {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setShopsArr(Object.values(data));
      }
      setShopsLoading(false);
    }

    fetchShops();
  }, [url]);
  return (
    <section className={`${css.shopsSection} container`}>
      <div className={css.sectionTitle}>
        <h2>Shops</h2>
        <p className={css.shopCount}>{shopsArr.length} shops</p>
        {shopsLoading && <h2>Loading...</h2>}
      </div>
      {!shopsLoading && !shopsArr.length && <NoShopsFound />}
      {shopsArr && (
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
      )}
    </section>
  );
}
export default AllShops;
