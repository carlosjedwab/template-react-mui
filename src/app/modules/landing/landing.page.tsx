import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppPaths } from 'app/routes/paths';
import { Box, Button, Container, Typography } from '@mui/material';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate(AppPaths.LoginPage.Base);
  };

  const handleClickSignup = () => {
    navigate(AppPaths.SignupPage.Base);
  };

  return (
    <Box>
      <Typography variant="h3">Landing Page for anonymous users</Typography>

      <Container>
        <Button variant="contained" onClick={handleClickLogin}>
          Login
        </Button>

        <Button variant="contained" onClick={handleClickSignup}>
          Signup
        </Button>
      </Container>
    </Box>
  );
};

export default LandingPage;
