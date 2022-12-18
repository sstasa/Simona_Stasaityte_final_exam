import css from '../form/Form.module.css';
import cssAdd from './AddShopForm.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { sendRequest } from '../../helpers/helpers';
import { toast, Toaster } from 'react-hot-toast';
import Button from '../UI/button/Button';
function AddShopForm(props) {
  const formik = useFormik({
    initialValues: {
      shopName: '',
      town: '',
      startYear: '',
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
    onSubmit: async (values) => {
      let shopObj = {
        shopName: values.shopName,
        town: values.town,
        startYear: values.startYear,
        description: values.description,
        imageUrl: values.imageUrl,
        postId: Math.floor(Math.random() * 1e15),
      };

      const url = `${import.meta.env.VITE_DB_URL}/firePost/shops.json`;

      const [ats, err] = await sendRequest(shopObj, url);
      console.log(`err = `, err);
      console.log(`ats = `, ats);
      if (ats) {
        toast.success('Shop added succesfully!');
      } else {
        toast.error('Something went wrong..');
      }
    },
  });
  return (
    <>
      <div>
        <Toaster
          containerStyle={{
            top: 700,
          }}
        />
      </div>
      <section className='container'>
        <h2>Add a new shop</h2>
        <p className={css.subtitle}>
          Fill in the details about your shop below
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className={`container ${cssAdd.form}`}
        >
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
            <p className={css.inputError}>{formik.errors.shopName}</p>
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
            <p className={css.inputError}>{formik.errors.town}</p>
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
            <p className={css.inputError}>{formik.errors.startYear}</p>
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
            <p className={css.inputError}>{formik.errors.description}</p>
          ) : (
            ''
          )}
          <div className={css.inputWithError}>
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
              <p className={css.inputError}>{formik.errors.imageUrl}</p>
            ) : (
              ''
            )}
          </div>
          <Button onClick={formik.handleSubmit}>Add shop</Button>
        </form>
      </section>
    </>
  );
}
export default AddShopForm;
