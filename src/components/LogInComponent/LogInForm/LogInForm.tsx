import { useFormik } from 'formik';
import Button from '../../../shared/Button/Button';
import React, { useState } from 'react';
import * as Yup from 'yup';
import useHttpLoader from '../../../hooks/useHttpLoader';
import { auth } from '../../../pages/Login/login.api';

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
    .min(4, 'Password is too short - should be 4 chars min')
    .max(10, 'Password is too long'),
});

const LogInForm = () => {
  const { loading, wait } = useHttpLoader();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (values: FormValues) => {
    wait(
      auth({ email: values.email, password: values.password })
        .then((resp) => {
          alert(JSON.stringify(resp, null, 2));
          setErrorMessage('');
        })
        .catch((err) => {
          setErrorMessage(err.message);
        })
    );
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit,
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
      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
      {!loading && <Button type="submit">Sign up</Button>}
      {loading && <span style={{ color: 'green' }}>Loading...</span>}
    </form>
  );
};

export default LogInForm;
