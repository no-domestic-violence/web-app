import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Context as AuthContext } from '../../state/AuthContext';
import { LoginForm } from '../../components';

const Login = () => {
  const history = useHistory();
  const { state } = useContext(AuthContext);
  const { token } = state;

  token && history.push('/');
  return (
    <div>
      <LoginForm />{' '}
    </div>
  );
};

export default Login;
