import { useFormik } from 'formik';
import Button from '../../../shared/Button/Button';
import React from 'react';
import * as Yup from 'yup';

interface FormValues {
  password: string;
  email: string;
}

const initialValues = {
  email: '',
  password: '',
};

const signUpSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('Password is required')
    .uppercase('воспользуйтесь большой буквой')
    .min(4, 'Password is too short - should be 4 chars min')
    .max(10, 'Password is too long'),
});

const onSubmit = (values: FormValues) => {
  alert(JSON.stringify(values, null, 2));
};

const LogInForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: onSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>
      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default LogInForm;
