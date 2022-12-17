import SingleShopCard from '../singleShopCard/SingleShopCard';
import { useFetch } from '../../helpers/helpers';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

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
    <section>
      {shopsLoading && !noShops && <h2>Loading...</h2>}
      {noShops && <h2>No shops created</h2>}
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
