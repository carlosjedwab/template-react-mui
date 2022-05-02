import * as React from 'react';
import { Button, Typography } from '@mui/material';
import { PageWrapper } from 'app/components/obj.page-wrapper';
import { useSignup } from 'app/domain/user';
import { TextField } from 'app/components/atm.text-field';
import { Column } from 'app/components/obj.grid';
import { AppPaths } from 'app/routes/paths';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();
  const { signupData, setSignupField, signup } = useSignup({
    onSuccess: () => {
      navigate(AppPaths.HomePage.Base);
    },
  });

  return (
    <PageWrapper>
      <Column alignItems="center">
        <Typography variant="h3">Signup Page</Typography>

        <form onSubmit={signup}>
          <Column alignItems="center" padding="8px" spacing="8px">
            <Column spacing="8px">
              <TextField
                label="Name"
                value={signupData.name}
                onChange={(name) => setSignupField('name', name)}
                type="name"
              />

              <TextField
                label="Email"
                value={signupData.email}
                onChange={(email) => setSignupField('email', email)}
                type="email"
              />

              <TextField
                label="Password"
                value={signupData.password}
                onChange={(password) => setSignupField('password', password)}
                type="text"
                hiddenType="password"
              />
            </Column>

            <Button type="submit" variant="outlined">
              <Typography variant="body1">Signup</Typography>
            </Button>
          </Column>
        </form>
      </Column>
    </PageWrapper>
  );
};

export default SignupPage;
