import css from './SingleShopCard.module.css';
function SingleShopCard(props) {
  return (
    <li key={props.postId} className={css.card}>
      <div className={css.imageWrapper}>
        <img src={props.imageUrl} alt='shop image' className={css.cardImage} />
      </div>
      <p className={css.pill}>{props.town}</p>
      <h2 className={css.cardTitle}>{props.shopName}</h2>
      <h3 className={css.subtitle}>Opened in {props.startYear}</h3>
      <p className={css.description}>{props.description}</p>
    </li>
  );
}
export default SingleShopCard;
