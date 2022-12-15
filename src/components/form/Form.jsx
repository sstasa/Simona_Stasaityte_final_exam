import css from './Form.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
function Form(props) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().min(6).required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={css.form}>
      <h2 className={css.title}>Create Account</h2>
      <p className={css.subtitle}>Please enter your details below</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          type='text'
          placeholder='Email'
          name='email'
          className={css.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className={css.inputError}>{formik.errors.email}</p>
        ) : (
          ''
        )}
        <input
          type='password'
          placeholder='Password'
          name='password'
          className={css.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className={css.inputError}>{formik.errors.password}</p>
        ) : (
          ' '
        )}
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
