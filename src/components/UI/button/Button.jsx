import css from './Button.module.css';
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.type === 'alt' ? css.altButton : css.button}
    >
      {props.children}
    </button>
  );
}
export default Button;
