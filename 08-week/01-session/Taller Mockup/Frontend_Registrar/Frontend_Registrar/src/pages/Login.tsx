import React from 'react';
import LoginForm from '../components/LoginForm';
import AuthLayout from '../layout/AuthLayout';

const Login: React.FC = () => (
  <AuthLayout>
    <LoginForm />
  </AuthLayout>
);

export default Login;