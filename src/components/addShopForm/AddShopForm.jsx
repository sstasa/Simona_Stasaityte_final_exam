import css from '../form/Form.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
function AddShopForm(props) {
  const formik = useFormik({
    initialValues: {
      shopName: '',
      town: '',
      startYear: 0,
      description: '',
      imageUrl: '',
    },
    validationSchema: Yup.object().shape({
      shopName: Yup.string().min(4).required(),
      town: Yup.string().min(4).required(),
      startYear: Yup.number().min(1970).max(2022).required(),
      description: Yup.string().min(6).required(),
      imageUrl: Yup.string().min(5).required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={css.form}>
      <form onSubmit={formik.handleSubmit}>
        <input
          type='text'
          name='shopName'
          placeholder='Shop name'
          className={css.input}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.shopName}
        />
        {formik.touched.shopName && formik.errors.shopName ? (
          <p>{formik.errors.shopName}</p>
        ) : (
          ''
        )}
        <input
          type='text'
          name='town'
          placeholder='Town'
          className={css.input}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.town}
        />
        {formik.touched.town && formik.errors.town ? (
          <p>{formik.errors.town}</p>
        ) : (
          ''
        )}
        <input
          type='number'
          name='startYear'
          placeholder='Year'
          className={css.input}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.startYear}
        />
        {formik.touched.startYear && formik.errors.startYear ? (
          <p>{formik.errors.startYear}</p>
        ) : (
          ''
        )}
        <input
          type='textarea'
          name='description'
          placeholder='Description'
          className={css.input}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <p>{formik.errors.description}</p>
        ) : (
          ''
        )}
        <input
          type='text'
          name='imageUrl'
          placeholder='Image link'
          className={css.input}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
        {formik.touched.imageUrl && formik.errors.imageUrl ? (
          <p>{formik.errors.imageUrl}</p>
        ) : (
          ''
        )}
        <button type='submit'>Add shop</button>
      </form>
    </div>
  );
}
export default AddShopForm;
