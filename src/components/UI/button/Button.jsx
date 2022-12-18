import css from './Button.module.css';
function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={props.styleType === 'alt' ? css.altButton : css.button}
      type={props.type === 'submit' ? 'submit' : 'button'}
    >
      {props.children}
    </button>
  );
}
export default Button;
