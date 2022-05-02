import * as React from 'react';
import { IconButton, Tab, Tabs } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import StormIcon from '@mui/icons-material/Storm';
import { useStore, UserStore } from 'app/data/local';
import { AppPaths } from 'app/routes/paths';
import { useNavigate } from 'react-router-dom';
import { Column } from 'app/components/obj.grid';

export const LoggedInSidebar = () => {
  const navigate = useNavigate();
  const [, userActions] = useStore(UserStore);
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleClickHome = () => {
    navigate(AppPaths.HomePage.Base);
  };

  const handleClickLogout = () => {
    userActions?.logout?.();
  };

  return (
    <Column justifyContent="space-between" alignItems="center" paddingY="16px">
      <Column spacing="32px">
        <IconButton onClick={handleClickHome}>
          <StormIcon sx={{ fontSize: '56px' }} />
        </IconButton>

        <Tabs
          value={tabIndex}
          onChange={(_, newValue) => setTabIndex(newValue)}
          orientation="vertical"
          TabIndicatorProps={{ style: { left: '0px' } }}
        >
          <Tab icon={<ListIcon sx={{ fontSize: '32px' }} />} label="Listing" />
          <Tab icon={<ImportContactsIcon sx={{ fontSize: '32px' }} />} label="Contacts" />
          <Tab icon={<DashboardIcon sx={{ fontSize: '32px' }} />} label="Dashboard" />
        </Tabs>
      </Column>

      <IconButton onClick={handleClickLogout}>
        <LogoutIcon sx={{ fontSize: '32px' }} />
      </IconButton>
    </Column>
  );
};
