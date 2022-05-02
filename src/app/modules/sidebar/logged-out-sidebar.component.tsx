import { Button, IconButton, Typography } from '@mui/material';
import StormIcon from '@mui/icons-material/Storm';
import { AppPaths } from 'app/routes/paths';
import { useNavigate } from 'react-router-dom';
import { Row } from 'app/components/obj.grid';

export const LoggedOutSidebar = () => {
  const navigate = useNavigate();

  const handleClickLanding = () => {
    navigate(AppPaths.LandingPage.Base);
  };

  const handleClickLogin = () => {
    navigate(AppPaths.LoginPage.Base);
  };

  const handleClickSignup = () => {
    navigate(AppPaths.SignupPage.Base);
  };

  return (
    <Row justifyContent="space-between" alignItems="center" padding="8px">
      <IconButton onClick={handleClickLanding}>
        <StormIcon sx={{ fontSize: '42px' }} />
      </IconButton>

      <Row spacing="8px">
        <Button variant="contained" onClick={handleClickLogin}>
          <Typography variant="body1">Login</Typography>
        </Button>

        <Button variant="contained" onClick={handleClickSignup}>
          <Typography variant="body1">Signup</Typography>
        </Button>
      </Row>
    </Row>
  );
};
