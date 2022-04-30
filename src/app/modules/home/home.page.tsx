import { PageWrapper } from 'app/components/obj.page-wrapper';
import { Typography } from '@mui/material';
import { useStore, UserStore } from 'app/data/local';

const HomePage = () => {
  const [userState] = useStore(UserStore);

  return (
    <PageWrapper loggedIn>
      <Typography variant="h3">Home Page</Typography>

      <Typography variant="body1">Olá, {userState?.user?.name}</Typography>
    </PageWrapper>
  );
};

export default HomePage;
