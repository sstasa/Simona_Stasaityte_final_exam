import css from './Form.module.css';
function Form(props) {
  return (
    <div className={css.form}>
      <h2 className={css.title}>Create Account</h2>
      <p className={css.subtitle}>Please enter your details below</p>
      <form>
        <input type='text' placeholder='Email' className={css.input} />
        <input type='password' placeholder='Password' className={css.input} />
        <button type='submit' className={css.mainButton}>
          Register
        </button>
      </form>
      <p className={css.subtitle}>
        Already have an account? <a className={css.link}>Log in</a>
      </p>
    </div>
  );
}
export default Form;
