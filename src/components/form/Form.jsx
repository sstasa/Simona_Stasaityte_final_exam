import css from './Form.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link, useHistory } from 'react-router-dom';
import { sendRequest } from '../../helpers/helpers';
import { useUser } from '../../helpers/UserContext';
import { toast } from 'react-hot-toast';
function Form(props) {
  const user = useUser();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().min(6).required(),
    }),
    onSubmit: async (values) => {
      const actionType = props.type;
      const userValues = {
        email: values.email,
        password: values.password,
      };

      let url = 'https://identitytoolkit.googleapis.com/v1/accounts:';

      if (actionType == 'register') {
        url = `${url}signUp?key=${import.meta.env.VITE_API_KEY}`;
        const [ats, err] = await sendRequest(userValues, url);
        if (err) {
          console.log('err sendRequest ===', err);
          switch (err.error.message) {
            case 'EMAIL_EXISTS':
              toast.error('This email is already in use!');
              break;
            case 'INVALID_EMAIL':
              toast.error('Please enter a valid email!');
              break;
          }
          return;
        }
        console.log('registered succesfully', ats);
        history.push('/');
      }

      if (actionType == 'login') {
        url = `${url}signInWithPassword?key=${import.meta.env.VITE_API_KEY}`;
        const [ats, err] = await sendRequest(userValues, url);
        if (err) {
          console.log('err sendRequest ===', err);
          switch (err.error.message) {
            case 'INVALID_EMAIL':
              toast.error('Please enter a valid email!');
              break;
            case 'EMAIL_NOT_FOUND':
            case 'INVALID_PASSWORD':
              toast.error('Incorrect email or password!');
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
              toast.error('Too many attempts to log in! Please try later');
              break;
          }
          return;
        }
        console.log('issiusta, ats ===', ats);
        let userObj = {
          idToken: ats.idToken,
          email: ats.email,
        };
        user.login(userObj);
        history.push('/');
      }
    },
  });
  return (
    <div className={css.form}>
      <h2 className={css.title}>
        {props.type == 'login' ? 'Welcome back!' : 'Create Account'}
      </h2>
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
          {props.type == 'login' ? 'Log in' : 'Register'}
        </button>
      </form>
      <p className={css.subtitle}>
        {props.type == 'login'
          ? `Don't have an account yet? `
          : 'Already have an account? '}
        <Link
          className={css.link}
          to={props.type == 'login' ? '/register' : '/login'}
        >
          {props.type == 'login' ? 'Register here' : 'Log in'}
        </Link>
      </p>
    </div>
  );
}
export default Form;
