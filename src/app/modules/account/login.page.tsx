import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { PageWrapper } from 'app/components/obj.page-wrapper';
import { useLogin } from 'app/domain/user';
import { TextField } from 'app/components/atm.text-field';
import { Column } from 'app/components/obj.grid';
import { AppPaths } from 'app/routes/paths';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginData, setLoginField, login } = useLogin({
    onSuccess: () => {
      navigate(AppPaths.HomePage.Base);
    },
  });

  return (
    <PageWrapper>
      <Column alignItems="center">
        <Typography variant="h3">Login Page</Typography>

        <form onSubmit={login}>
          <Column alignItems="center" padding={2} spacing={2}>
            <Column spacing={2}>
              <TextField
                label="Email"
                value={loginData.email}
                onChange={(email) => setLoginField('email', email)}
                type="email"
              />

              <TextField
                label="Password"
                value={loginData.password}
                onChange={(password) => setLoginField('password', password)}
                type={'text'}
                hiddenType={'password'}
              />
            </Column>

            <Button type="submit" variant="outlined">
              <Typography variant="body1">Login</Typography>
            </Button>
          </Column>
        </form>
      </Column>
    </PageWrapper>
  );
};

export default LoginPage;
