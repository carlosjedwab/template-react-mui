import * as React from 'react';
import { useStore, UserStore } from 'app/data/local';
import { Typography } from '@mui/material';

const LoginPage = () => {
  const [, userActions] = useStore(UserStore);

  const [loginFields, setLoginFields] = React.useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    userActions?.login?.({
      id: 'TEST ID',
      name: 'TEST NAME',
      email: loginFields.email,
      token: 'TEST TOKEN',
    });
  };

  return (
    <>
      <Typography variant="h3">Login Page</Typography>

      <input
        value={loginFields.email}
        onChange={(event) => setLoginFields({ ...loginFields, email: event.target.value })}
      />
      <input
        value={loginFields.password}
        onChange={(event) => setLoginFields({ ...loginFields, password: event.target.value })}
      />

      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default LoginPage;
