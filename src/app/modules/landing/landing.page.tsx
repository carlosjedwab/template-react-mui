import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from 'app/routes/paths';
import { Button, Grid, Typography } from '@mui/material';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(AppPaths.LoginPage.Base);
  };

  const handleClickSignup = () => {
    navigate(AppPaths.SignupPage.Base);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={handleClickLogin}>
            <Typography variant="body1">Login</Typography>
          </Button>
        </Grid>

        <Grid item>
          <Button variant="contained" onClick={handleClickSignup}>
            <Typography variant="body1">Signup</Typography>
          </Button>
        </Grid>
      </Grid>

      <Typography variant="h3">Landing Page for anonymous users</Typography>
    </>
  );
};

export default LandingPage;
