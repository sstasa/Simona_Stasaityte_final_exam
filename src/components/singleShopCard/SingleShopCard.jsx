import css from './SingleShopCard.module.css';
function SingleShopCard(props) {
  return (
    <li key={props.postId}>
      <div className={css.imageContainer}>
        <img src={props.imageUrl} alt='shop image' />
      </div>
      <h2>{props.shopName}</h2>
      <h3>
        Located in {props.town}. Opened in {props.startYear}
      </h3>
      <p>{props.description}</p>
    </li>
  );
}
export default SingleShopCard;
