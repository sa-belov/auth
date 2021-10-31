import React from 'react';
import LogInForm from './LogInForm/LogInForm';
import { Link } from 'react-router-dom';

const LogInComponent = () => {
  const renderSignupLink = () => (
    <div>
      <p>Don't have an account? </p>
      <Link to="/signup">Sign Up</Link>
    </div>
  );

  return (
    <div>
      <h1>Вход</h1>
      <LogInForm />
      {renderSignupLink()}
    </div>
  );
};

export default LogInComponent;
