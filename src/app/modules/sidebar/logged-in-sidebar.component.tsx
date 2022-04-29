import { Button, Grid, Typography } from '@mui/material';
import { useStore, UserStore } from 'app/data/local';
import { AppPaths } from 'app/routes/paths';
import { useNavigate } from 'react-router-dom';

export const LoggedInSidebar = () => {
  const navigate = useNavigate();
  const [, userActions] = useStore(UserStore);

  const handleClickHome = () => {
    navigate(AppPaths.HomePage.Base);
  };

  const handleLogout = () => {
    userActions?.logout?.();
  };

  return (
    <Grid container paddingX={2} direction="column" alignItems="center" height="100%" sx={{ backgroundColor: 'red' }}>
      <Grid item paddingY={2}>
        <Button variant="contained" onClick={handleClickHome}>
          <Typography variant="body1">Home Page</Typography>
        </Button>
      </Grid>

      <Grid item paddingY={2}>
        <Button variant="contained" onClick={handleLogout}>
          <Typography variant="body1">Logout</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
