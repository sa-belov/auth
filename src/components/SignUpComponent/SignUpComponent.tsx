import React, { FC } from 'react';
import SignUpForm from './SignUpForm/SignUpForm';
import { Link } from 'react-router-dom';

const SignUpComponent: FC = () => {
  const renderSignInLink = () => (
    <div>
      <p>Do you have an account? </p>
      <Link to="/">Sign In</Link>
    </div>
  );

  return (
    <div>
      <h1>Регистрация</h1>
      <SignUpForm />
      {renderSignInLink()}
    </div>
  );
};

export default SignUpComponent;
